import request from 'supertest';
import app from '../src/server';

describe('GET /api', () => {
  it('should return 200 OK', async () => {
    return await request(app).get('/api/ecommerce/v1/products').expect(200);
  });
});
