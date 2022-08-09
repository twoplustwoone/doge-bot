const queryString = require('query-string')

const baseUri = 'https://api.twelvedata.com'

const getStockPrice = (symbol, interval = '1min', field = 'open') => {
  const query = {
    symbol,
    interval,
    outputsize: 1,
    format: 'JSON',
    previous_close: true,
    apikey: process.env.TWELVE_DATA_API_KEY,
  }
  return fetch(`${baseUri}/time_series/?${queryString.stringify(query)}`)
    .then((response) => response.json())
    .then((data) => console.log(data) || data)
    .then((data) => parseFloat(data.values[0][field]))
}

const getStockPriceOpening = (symbol) => {
  return getStockPrice(symbol, '1day', 'previous_close')
}

module.exports = { getStockPrice, getStockPriceOpening }
