require('dotenv').config();
const { fetchData } = require('../src/webApiInteractions');


describe('Web API interaction', () => {
    it('fetches rates successfully!', async () => {

   
    const rates =  await fetchData();
    expect(rates).toBeDefined();
    expect(rates).toHaveProperty('GBP');
    expect(rates).toHaveProperty('NGN');
    expect(rates).toHaveProperty('KES');
    expect(rates).toHaveProperty('GHS');
    expect(rates).toHaveProperty('TZS');
    expect(rates).toHaveProperty('UGX');
    expect(rates).toHaveProperty('RWF');
    expect(rates).toHaveProperty('ZAR');
    console.log('API Rates:', rates); // Log the output
});
});

test('Handles invalid API key gracefully', async () => {
    process.env.EXCHANGERATE_API_KEY = 'invalid_key';
    await expect(fetchData()).rejects.toThrow('Failed to fetch data: HTTP error!');
});

test('Handles missing API key gracefully', async () => {
    process.env.EXCHANGERATE_API_KEY = '';
    await expect(fetchData()).rejects.toThrow('APi key is not set. Please check your .env file!');
});

