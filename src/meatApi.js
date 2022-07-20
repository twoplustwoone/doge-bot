const baseUri = 'http://www.jscarnicerias.com.ar/api/categorias/productos'

const getMeatPrice = (currency = 1) => {
  return fetch(
    baseUri
  )
    .then((response) => response.json())
    .then((data) => {
      console.log({ data })
      return (data[0].productos.find(p => p.id === '19').precio) / currency
    })
}

module.exports = { getMeatPrice }
