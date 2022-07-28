/**
 * @typedef {JSCategory[]} JSCatalog
 */

/**
 * @typedef {Object} JSCategory
 * @property {string} id
 * @property {string} nombre
 * @property {1|2} activa
 * @property {string} created_at
 * @property {string} updated_at
 * @property {JSProduct[]} productos
 */

/**
 * @typedef {Object} JSProduct
 * @property {string} id
 * @property {string} nombre
 * @property {string} descripcion
 * @property {string} categoria_id
 * @property {string} unidad_id
 * @property {string} precio
 * @property {string} created_at
 * @property {string} updated_at
 * @property {1|2} activo
 * @property {0|1} destacado
 * @property {0|1} oferta
 * @property {string} unidad_seleccionada
 * @property {unknown} pedido_comentarios
 * @property {string} tipo_corte
 * @property {string} cantidad
 * @property {JSUnit} unida
 * @property {JSCategory} categoria
 */

/**
 * @typedef {JSUnit}
 * @property {string} id
 * @property {string} nombre
 * @property {string} factor
 * @property {string} created_at
 * @property {string} updated_at
 * @property {string} abreviatura
 */

const baseUri = 'http://www.jscarnicerias.com.ar/api/categorias/productos'

/**
 *
 * @param {JSCatalog} catalog
 * @param {string} cut
 * @param {number} currency
 * @returns {string}
 */
const getCutPrice = (catalog, cut, currency) => {
  cut = cut.toLowerCase()
  const product = catalog
    .find((category) => category.nombre.toLowerCase() === 'vacunos')
    .productos.find((p) => p.nombre.toLowerCase() === cut)
  if (product) {
    return product.precio / currency
  }
  return 'not available'
}

const getMeatPrice = (cut, currency = 1) => {
  return fetch(baseUri)
    .then((response) => response.json())
    .then((data) => getCutPrice(data, cut, currency))
}

module.exports = { getMeatPrice, getCutPrice }
