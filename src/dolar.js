const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://dolarhoy.com/";

async function getDolarBlue() {
  // Make an XHR request to get the latest dolar blue price from dolarhoy.com
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const purchase = $(".tile.is-parent.is-5 .compra .val")
    .text()
    .replace("$", "");
  const sale = $(".tile.is-parent.is-5 .venta .val").text().replace("$", "");
  console.log({ purchase, sale });
  return (parseInt(purchase) + parseInt(sale)) / 2;
}

module.exports = { getDolarBlue };
