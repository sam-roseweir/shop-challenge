import ProductService from './ProductService';

describe('ProductService', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('getProducts', () => {
    it('should fetch products from localStorage if available', async () => {
      const mockProductData = [{ id: 1, name: 'Product 1' }];
      localStorage.setItem('productData', JSON.stringify(mockProductData));

      const result = await ProductService.getProducts();

      expect(result).toEqual(mockProductData);
    });

    it('should fetch products from the server if not available in localStorage', async () => {
      const mockProductData = [{ id: 1, name: 'Product 1' }];
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockProductData),
      });

      const result = await ProductService.getProducts();

      expect(result).toEqual(mockProductData);
      expect(localStorage.getItem('productData')).toEqual(JSON.stringify(mockProductData));
    });

    it('should fetch a specific product by productId', async () => {
      const mockProductData = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
      localStorage.setItem('productData', JSON.stringify(mockProductData));

      const result = await ProductService.getProducts(2);

      expect(result).toEqual({ id: 2, name: 'Product 2' });
    });

    it('should handle errors when fetching products', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      });

      await expect(ProductService.getProducts()).rejects.toThrow('Failed to fetch products');
    });
  });

  describe('editProduct', () => {
    it('should update a product in localStorage', async () => {
      const mockProductData = [{ id: 1, name: 'Product 1' }];
      localStorage.setItem('productData', JSON.stringify(mockProductData));

      const updatedProduct = { id: 1, name: 'Updated Product 1' };
      await ProductService.editProduct(JSON.stringify(updatedProduct));

      const storedProducts = JSON.parse(localStorage.getItem('productData'));
      expect(storedProducts).toEqual([updatedProduct]);
    });

  });
});
