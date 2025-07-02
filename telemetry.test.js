// tests/telemetry.test.js AUTOMATED TEST
const request = require('supertest');
const app = require('../app');  // <- import Express app here

describe('Telemetry API', () => {
  it('GET /api/telemetry/static', async () => {
    const res = await request(app).get('/api/telemetry/static');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('vehicleId');
    expect(res.body).toHaveProperty('timestamp');
    expect(res.body).toHaveProperty('speed');
    expect(res.body).toHaveProperty('batteryLevel');
    expect(res.body).toHaveProperty('brakeEngaged');
    expect(res.body).toHaveProperty('location');
  });

  

  it('GET /api/telemetry/dynamic as JSON snapshot', async () => {
  const res = await request(app).get('/api/telemetry/dynamic');
  expect(res.statusCode).toBe(200);
  expect(res.headers['content-type']).toMatch(/application\/json/);
  expect(res.body).toHaveProperty('vehicleId');
  expect(res.body).toHaveProperty('timestamp');
  expect(res.body).toHaveProperty('speed');
  expect(res.body).toHaveProperty('batteryLevel');
  expect(res.body).toHaveProperty('brakeEngaged');
  expect(res.body).toHaveProperty('location');
}); 

});
