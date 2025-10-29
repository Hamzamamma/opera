const API_BASE_URL = import.meta.env.VITE_PRINTIFY_API_BASE_URL || 'https://api.printify.com/v1';
const API_TOKEN = import.meta.env.VITE_PRINTIFY_API_TOKEN;

const headers = {
  'Authorization': `Bearer ${API_TOKEN}`,
  'Content-Type': 'application/json'
};

// Get all shops
export const getShops = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/shops.json`, { headers });
    if (!response.ok) throw new Error('Failed to fetch shops');
    return await response.json();
  } catch (error) {
    console.error('Error fetching shops:', error);
    throw error;
  }
};

// Get products for a specific shop
export const getProducts = async (shopId, page = 1, limit = 100) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/shops/${shopId}/products.json?page=${page}&limit=${limit}`,
      { headers }
    );
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Get single product details
export const getProduct = async (shopId, productId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/shops/${shopId}/products/${productId}.json`,
      { headers }
    );
    if (!response.ok) throw new Error('Failed to fetch product');
    return await response.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

// Get orders for a specific shop
export const getOrders = async (shopId, page = 1, limit = 100) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/shops/${shopId}/orders.json?page=${page}&limit=${limit}`,
      { headers }
    );
    if (!response.ok) throw new Error('Failed to fetch orders');
    return await response.json();
  } catch (error) {
    console.error('Error fetching orders:', error);
    throw error;
  }
};

// Create a new product
export const createProduct = async (shopId, productData) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/shops/${shopId}/products.json`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify(productData)
      }
    );
    if (!response.ok) throw new Error('Failed to create product');
    return await response.json();
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

// Update a product
export const updateProduct = async (shopId, productId, productData) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/shops/${shopId}/products/${productId}.json`,
      {
        method: 'PUT',
        headers,
        body: JSON.stringify(productData)
      }
    );
    if (!response.ok) throw new Error('Failed to update product');
    return await response.json();
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

// Delete a product
export const deleteProduct = async (shopId, productId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/shops/${shopId}/products/${productId}.json`,
      {
        method: 'DELETE',
        headers
      }
    );
    if (!response.ok) throw new Error('Failed to delete product');
    return true;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};

// Publish a product
export const publishProduct = async (shopId, productId, publishData) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/shops/${shopId}/products/${productId}/publish.json`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify(publishData)
      }
    );
    if (!response.ok) throw new Error('Failed to publish product');
    return await response.json();
  } catch (error) {
    console.error('Error publishing product:', error);
    throw error;
  }
};
