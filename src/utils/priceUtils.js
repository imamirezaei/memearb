const axios = require('axios');

const fetchMemeCoinData = async () => {
  // Example: Fetch meme coin data from multiple APIs (You need to replace this with actual API calls)
  const apiResponses = await Promise.all([
    axios.get('https://api.example.com/memecoin1'),
    axios.get('https://api.example.com/memecoin2')
  ]);

  // Process the response data to extract meme coin prices
  const memeCoins = apiResponses.map(response => {
    return {
      exchange: response.data.exchangeName,  // Customize based on actual API response
      price: response.data.price,  // Customize based on actual API response
    };
  });

  // Sort by the highest price for the past hour
  memeCoins.sort((a, b) => b.price - a.price);

  return memeCoins;
};

module.exports = fetchMemeCoinData;