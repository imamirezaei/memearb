require("dotenv").config();
const axios = require("axios");

// API Configuration
const API_KEY = process.env.API_KEY;
const API_URL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

// Fetch Meme Coins Function
async function fetchMemeCoins() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY,
      },
      params: {
        start: 1,
        limit: 100, // Fetch up to 100 coins
        convert: "USD",
      },
    });

    // Extract Meme Coins
    const allCoins = response.data.data;

    // Filter only Meme Coins (Category 11 for memes in CoinMarketCap)
    const memeCoins = allCoins.filter((coin) => coin.category === "meme-token");

    // Sort by 1-hour percentage change (descending order)
    memeCoins.sort((a, b) => b.quote.USD.percent_change_1h - a.quote.USD.percent_change_1h);

    console.log("Top 10 Meme Coins by 1-Hour Change:");
    console.table(
      memeCoins.slice(0, 10).map((coin) => ({
        Name: coin.name,
        Symbol: coin.symbol,
        Price: `$${coin.quote.USD.price.toFixed(6)}`,
        "1H Change (%)": coin.quote.USD.percent_change_1h.toFixed(2),
      }))
    );

    return memeCoins;
  } catch (error) {
    console.error("Error fetching meme coins:", error.message);
    return [];
  }
}

// Run the function if executed directly
if (require.main === module) {
  fetchMemeCoins();
}

// Export function for use in other files
module.exports = fetchMemeCoins;