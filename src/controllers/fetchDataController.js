module.exports = {
    fetchData(req, res) {
      // Sample meme coin data
      const memeCoins = [
        { exchange: 'Binance', price: 0.000004, coin: 'DogeCoin', change: '+3%' },
        { exchange: 'Coinbase', price: 0.0000038, coin: 'Shiba Inu', change: '-1%' },
        { exchange: 'Kraken', price: 0.0000042, coin: 'Floki Inu', change: '+5%' },
      ];
  
      // Pass the data to the view
      res.render('index', { memeCoins });
    },
  };