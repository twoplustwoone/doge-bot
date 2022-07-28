const baseUri = 'http://www.jscarnicerias.com.ar/api/categorias/productos'

const getCutPrice = (data, cut, currency) => {
  const corte = data[0].productos.find(
    (p) => p.nombre.toLowerCase() === cut.toLowerCase()
  )
  if (corte) {
    return corte.precio / currency
  }
  return 'not available'
}

const getMeatPrice = (cut, currency = 1) => {
  return fetch(baseUri)
    .then((response) => response.json())
    .then((data) => {
      return getCutPrice(data, cut, currency)
    })
}

module.exports = { getMeatPrice }
