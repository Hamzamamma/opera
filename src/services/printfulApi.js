const API_BASE_URL = import.meta.env.VITE_PRINTFUL_API_BASE_URL || 'https://api.printful.com';
const API_TOKEN = import.meta.env.VITE_PRINTFUL_API_TOKEN;

// Printful uses Basic Auth - token as username, empty password
// We need to encode it as base64: btoa(token + ':')
const authString = btoa(`${API_TOKEN}:`);

const headers = {
  'Authorization': `Basic ${authString}`,
  'Content-Type': 'application/json',
  'X-PF-Store-Id': 'default'
};

// Get store info
export const getStoreInfo = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/store`, { headers });
    if (!response.ok) throw new Error('Failed to fetch store info');
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching store info:', error);
    throw error;
  }
};

// Get sync products (your custom products)
export const getSyncProducts = async (offset = 0, limit = 100) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/sync/products?offset=${offset}&limit=${limit}`,
      { headers }
    );
    if (!response.ok) throw new Error('Failed to fetch sync products');
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching sync products:', error);
    throw error;
  }
};

// Get single sync product
export const getSyncProduct = async (productId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/sync/products/${productId}`,
      { headers }
    );
    if (!response.ok) throw new Error('Failed to fetch sync product');
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching sync product:', error);
    throw error;
  }
};

// Get orders
export const getOrders = async (offset = 0, limit = 100, status = '') => {
  try {
    let url = `${API_BASE_URL}/orders?offset=${offset}&limit=${limit}`;
    if (status) url += `&status=${status}`;

    const response = await fetch(url, { headers });
    if (!response.ok) throw new Error('Failed to fetch orders');
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// Get single order
export const getOrder = async (orderId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/orders/${orderId}`,
      { headers }
    );
    if (!response.ok) throw new Error('Failed to fetch order');
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching order:', error);
    throw error;
  }
};

// Get catalog products (all available products)
export const getCatalogProducts = async (categoryId = null) => {
  try {
    let url = `${API_BASE_URL}/products`;
    if (categoryId) url += `?category_id=${categoryId}`;

    const response = await fetch(url, { headers });
    if (!response.ok) throw new Error('Failed to fetch catalog products');
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching catalog products:', error);
    throw error;
  }
};

// Get catalog product details
export const getCatalogProduct = async (productId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/products/${productId}`,
      { headers }
    );
    if (!response.ok) throw new Error('Failed to fetch catalog product');
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching catalog product:', error);
    throw error;
  }
};

// Get catalog categories
export const getCatalogCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`, { headers });
    if (!response.ok) throw new Error('Failed to fetch categories');
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Create sync product
export const createSyncProduct = async (productData) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/sync/products`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify(productData)
      }
    );
    if (!response.ok) throw new Error('Failed to create sync product');
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error creating sync product:', error);
    throw error;
  }
};

// Update sync product
export const updateSyncProduct = async (productId, productData) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/sync/products/${productId}`,
      {
        method: 'PUT',
        headers,
        body: JSON.stringify(productData)
      }
    );
    if (!response.ok) throw new Error('Failed to update sync product');
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error updating sync product:', error);
    throw error;
  }
};

// Delete sync product
export const deleteSyncProduct = async (productId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/sync/products/${productId}`,
      {
        method: 'DELETE',
        headers
      }
    );
    if (!response.ok) throw new Error('Failed to delete sync product');
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error deleting sync product:', error);
    throw error;
  }
};

// Create order
export const createOrder = async (orderData) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/orders`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify(orderData)
      }
    );
    if (!response.ok) throw new Error('Failed to create order');
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

// Confirm order
export const confirmOrder = async (orderId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/orders/${orderId}/confirm`,
      {
        method: 'POST',
        headers
      }
    );
    if (!response.ok) throw new Error('Failed to confirm order');
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error confirming order:', error);
    throw error;
  }
};

// Get statistics
export const getStatistics = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/store/statistics`, { headers });
    if (!response.ok) throw new Error('Failed to fetch statistics');
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching statistics:', error);
    throw error;
  }
};
