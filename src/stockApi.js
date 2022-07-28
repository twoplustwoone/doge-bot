const baseUri = 'https://api.twelvedata.com'

// const stockPriceOpeningCache = {}

const getStockPrice = (symbol, interval = 'min') => {
  return fetch(
    `${baseUri}/time_series/?symbol=${symbol}&interval=1${interval}&outputsize=1&format=JSON&apikey=${process.env.TWELVE_DATA_API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log({ data })
      return data.values[0].open
    })
}

const getStockPriceOpening = (symbol) => {
  // const date = new Date()
  // const year = date.getFullYear()
  // const day = date.getDay()
  // const month = date.getMonth()
  // const dateString = `${year}-${month}-${day}`
  // if (!stockPriceOpeningCache[dateString]) {
  //   stockPriceOpeningCache[dateString] = {}
  // }
  // if (stockPriceOpeningCache[dateString][symbol]) {
  //   return stockPriceOpeningCache[dateString][symbol]
  // }
  return getStockPrice(symbol, 'day')
  // stockPriceOpeningCache[dateString][symbol] = stockPrice
}

module.exports = { getStockPrice, getStockPriceOpening }
