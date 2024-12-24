require('dotenv').config();  //Load the environment variables
const fetch = require('node-fetch');  

async function fetchData() {

    // Using exchange rate api to get the current rate of currencies where cpayant currently operates 

    const apiKey = process.env.EXCHANGERATE_API_KEY;
    const baseCurrency = process.env.BASE_CURRENCY || 'USD';
    const targetCurrencies = process.env.TARGET_CURRENCIES.split(',') || ['NGN', 'GBP', 'KES', 'GHS', 'TZS', 'UGX' ,'RWF' ,'ZAR'];
    const apiURL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;

    if (!apiKey) {
        throw new Error('APi key is not set. Please check your .env file!')
        //Check for key before sending request 
    }


    try {
        const response = await fetch(apiURL);


        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);

            // check if the api has been called successfully
        }
        
        const data = await response.json();  // Parse the JSON response

        if (data.result !== 'success') {
            throw new Error (`API Error! Message: ${data['error-type']}`);
        }

        const rates = targetCurrencies.reduce((acc, currency) => {
            if (data.conversion_rates[currency]) {
                acc[currency] = data.conversion_rates[currency];
            } else {
                acc[currency] = 'unavailable';
            }
            return acc;
        }, {});

        return rates // Return the extracted rates

    } catch (error) {
        throw new Error (`Failed to fetch data: ${error.message}`);
    }
}

module.exports = { fetchData };