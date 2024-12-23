# Web Development Tasks: String Manipulation, Stack & Queue, Web API Interaction

## **Description**
This repository contains the solutions for three web development tasks:
1. **String Manipulation** - Convert case and remove vowels from a string.
2. **Stack & Queue** - Implement Stack and Queue data structures.
3. **Web API Interaction** - Fetch real-time exchange rates from a public API.

---

## **Features**
- String transformation that handles case inversion and vowel removal.
- Stack and Queue implementation with essential methods.
- Fetches real-time exchange rates for multiple currencies (BTC, ETH, NGN, GBP, KES).

---

## **Setup Instructions**

### Step 1: Clone the Repository
```bash
git clone https://github.com/your-repository.git
cd your-repository
```
### Step 2: Install Dependencies
``` bash
npm install
```

### Step 3: Create .env File
Create a .env file in the root directory with the following content:
``` bash
EXCHANGERATE_API_KEY=your_api_key_here
BASE_CURRENCY=USD
TARGET_CURRENCIES=GBP,NGN,KES,GHS,TZS,UGX,RWF,ZAR
```
### Step 4: Run the Script
``` bash
node src/your_script.js
```

### Step 5: Run Tests
To ensure everything is working:

``` bash
npm test

```
## Testing
The application uses Jest for unit testing. The tests verify:

String transformation functionality.
Correct behavior of stack and queue operations.
Exchange rate fetching from the API and handling errors.
Run tests using:

``` bash
npm test

```

# Supported Currencies
- BTC: Bitcoin
- ETH: Ethereum
- NGN: Nigerian Naira
- GBP: British Pound
- KES: Kenyan Shilling

### Error Handling
Invalid API Key: Throws an API error.
Missing API Key: Returns an error stating API key is missing.
Unavailable Currency Rates: Returns Unavailable for unavailable currencies.