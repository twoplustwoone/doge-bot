const baseUri = 'http://www.jscarnicerias.com.ar/api/categorias/productos'

function getCutPrice(data, cut, currency) {
  var corte = data[0].productos.find(p => p.nombre.toLowerCase() === cut.toLowerCase());
  if(corte)
    return corte.precio / currency;
  else return "not available";
}

const getMeatPrice = (cut, currency = 1) => {
  return fetch(
    baseUri
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log({ data })
      return getCutPrice(data, cut, currency)
    })
}

module.exports = { getMeatPrice }
