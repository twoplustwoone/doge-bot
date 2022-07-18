const baseUri = "https://api.twelvedata.com";

const getStockPrice = (symbol) => {
  return fetch(
    `${baseUri}/time_series/?symbol=${symbol}&interval=1min&outputsize=1&format=JSON%apikey=${process.env.TWELVE_DATA_API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log({ data, TWELVE_DATA_API_KEY: process.env.TWELVE_DATA_API_KEY });
      return data.values[0].open;
    });
};

module.exports = { getStockPrice };
