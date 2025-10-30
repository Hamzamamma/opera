import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Cache in-memory per catalogo
let catalogCache = null;
let cacheTime = null;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 ore

// Printful API token da .env
const PRINTFUL_TOKEN = process.env.PRINTFUL_API_TOKEN;

const printfulHeaders = {
  'Authorization': `Bearer ${PRINTFUL_TOKEN}`,
  'Content-Type': 'application/json'
};

// Helper: Fetch da Printful
const fetchPrintful = async (endpoint) => {
  const url = `https://api.printful.com${endpoint}`;

  console.log('🔍 Fetching from Printful:', url);
  console.log('🔑 Headers:', JSON.stringify(printfulHeaders, null, 2));

  const response = await fetch(url, {
    headers: printfulHeaders
  });

  console.log('📡 Response status:', response.status, response.statusText);

  if (!response.ok) {
    const errorText = await response.text();
    console.error('❌ Printful error response:', errorText);
    throw new Error(`Printful API error: ${response.statusText}`);
  }

  const data = await response.json();
  console.log('✅ Printful response successful, products:', data.result?.length || 'N/A');
  return data.result;
};

// ===================
// API ROUTES
// ===================

// GET /api/printful/catalog - Catalogo prodotti con cache
app.get('/api/printful/catalog', async (req, res) => {
  try {
    const now = Date.now();

    // Controlla cache
    if (catalogCache && (now - cacheTime) < CACHE_DURATION) {
      console.log('✅ Cache hit - returning cached catalog');
      return res.json({
        products: catalogCache,
        cached: true,
        cachedAt: new Date(cacheTime).toISOString()
      });
    }

    console.log('❌ Cache miss - fetching from Printful...');

    // Fetch da Printful
    const products = await fetchPrintful('/products');

    // Filtra solo prodotti popolari per GCC
    const popularProducts = products.filter(p =>
      ['T-SHIRT', 'HOODIE', 'SWEATSHIRT', 'MUG', 'PHONE CASE', 'TOTE', 'STICKER', 'POSTER', 'TANK TOP', 'DAD HAT'].includes(p.type)
    );

    // Salva in cache
    catalogCache = popularProducts;
    cacheTime = now;

    console.log(`✅ Catalog fetched: ${popularProducts.length} products`);

    res.json({
      products: popularProducts,
      cached: false,
      totalProducts: products.length,
      filteredProducts: popularProducts.length
    });
  } catch (error) {
    console.error('Error fetching catalog:', error);

    // Fallback a cache vecchia se disponibile
    if (catalogCache) {
      return res.json({
        products: catalogCache,
        cached: true,
        warning: 'Using stale cache due to API error'
      });
    }

    res.status(500).json({
      error: 'Failed to fetch catalog',
      message: error.message
    });
  }
});

// GET /api/printful/product/:id - Dettagli prodotto specifico
app.get('/api/printful/product/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await fetchPrintful(`/products/${productId}`);

    res.json({ product });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({
      error: 'Failed to fetch product',
      message: error.message
    });
  }
});

// GET /api/printful/variant/:id - Info variante specifica
app.get('/api/printful/variant/:id', async (req, res) => {
  try {
    const variantId = req.params.id;
    const data = await fetchPrintful(`/products/variant/${variantId}`);

    res.json(data);
  } catch (error) {
    console.error('Error fetching variant:', error);
    res.status(500).json({
      error: 'Failed to fetch variant',
      message: error.message
    });
  }
});

// POST /api/printful/mockup - Genera mockup
app.post('/api/printful/mockup', async (req, res) => {
  try {
    const { productId, variantIds, designUrl } = req.body;

    // Step 1: Crea task mockup
    const taskData = {
      variant_ids: variantIds,
      format: 'jpg',
      files: [
        {
          placement: 'front',
          image_url: designUrl,
          position: {
            area_width: 1800,
            area_height: 2400,
            width: 1800,
            height: 1800,
            top: 300,
            left: 0
          }
        }
      ]
    };

    const taskResponse = await fetch(`https://api.printful.com/mockup-generator/create-task/${productId}`, {
      method: 'POST',
      headers: printfulHeaders,
      body: JSON.stringify(taskData)
    });

    const { result: { task_key } } = await taskResponse.json();

    // Step 2: Polling per risultato (max 30 secondi)
    let mockups = null;
    let attempts = 0;
    const maxAttempts = 15;

    while (!mockups && attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 2000)); // 2 sec

      const resultResponse = await fetch(`https://api.printful.com/mockup-generator/task?task_key=${task_key}`, {
        headers: printfulHeaders
      });

      const resultData = await resultResponse.json();

      if (resultData.result.status === 'completed') {
        mockups = resultData.result.mockups;
      }

      attempts++;
    }

    if (!mockups) {
      return res.status(408).json({
        error: 'Mockup generation timeout',
        task_key
      });
    }

    res.json({ mockups, task_key });
  } catch (error) {
    console.error('Error generating mockup:', error);
    res.status(500).json({
      error: 'Failed to generate mockup',
      message: error.message
    });
  }
});

// GET /api/printful/shipping/rates - Calcola costi spedizione
app.post('/api/printful/shipping/rates', async (req, res) => {
  try {
    const response = await fetch('https://api.printful.com/shipping/rates', {
      method: 'POST',
      headers: printfulHeaders,
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.json(data.result);
  } catch (error) {
    console.error('Error calculating shipping:', error);
    res.status(500).json({
      error: 'Failed to calculate shipping',
      message: error.message
    });
  }
});

// GET /api/printful/sync-products - Sync products (creator's products)
app.get('/api/printful/sync-products', async (req, res) => {
  try {
    const syncProducts = await fetchPrintful('/store/products');
    res.json({ products: syncProducts });
  } catch (error) {
    console.error('Error fetching sync products:', error);
    res.status(500).json({
      error: 'Failed to fetch sync products',
      message: error.message
    });
  }
});

// POST /api/printful/sync-products - Crea sync product
app.post('/api/printful/sync-products', async (req, res) => {
  try {
    const response = await fetch('https://api.printful.com/store/products', {
      method: 'POST',
      headers: printfulHeaders,
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.json(data.result);
  } catch (error) {
    console.error('Error creating sync product:', error);
    res.status(500).json({
      error: 'Failed to create sync product',
      message: error.message
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Opera Printful API Server',
    cacheStatus: catalogCache ? 'active' : 'empty',
    cachedProducts: catalogCache ? catalogCache.length : 0,
    cacheAge: cacheTime ? `${Math.floor((Date.now() - cacheTime) / 1000)}s` : 'none'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Opera Printful API Server running on http://localhost:${PORT}`);
  console.log(`📦 Printful token configured: ${PRINTFUL_TOKEN ? 'Yes' : 'No'}`);
  console.log(`💾 Cache duration: ${CACHE_DURATION / 1000 / 60 / 60} hours\n`);
});
