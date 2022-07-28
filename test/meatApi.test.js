const { getCutPrice, getMeatPrice } = require('../src/meatApi')

describe('meatApi', () => {
  /** @type {import('../src/meatApi').JSCatalog} */
  const catalog = [
    {
      nombre: 'Vacunos',
      productos: [
        {
          nombre: 'vacío',
          precio: 100,
        },
        {
          nombre: 'asado',
          precio: 200,
        },
      ],
    },
  ]

  describe('getCutPrice', () => {
    it('should return the price of the cut', () => {
      const cut = 'vacío'
      const currency = 1
      const price = getCutPrice(catalog, cut, currency)
      expect(price).toBe(100)
    })

    it('should return "not available" if the cut is not available', () => {
      const cut = 'matambre'
      const currency = 1
      const price = getCutPrice(catalog, cut, currency)
      expect(price).toBe('not available')
    })

    it('should return price in the given currency', () => {
      /** @type {import('../src/meatApi').JSCatalog} */
      const catalog = [
        {
          nombre: 'Vacunos',
          productos: [
            {
              nombre: 'vacío',
              precio: 100,
            },
            {
              nombre: 'asado',
              precio: 200,
            },
          ],
        },
      ]
      const cut = 'vacío'
      const currency = 2
      const price = getCutPrice(catalog, cut, currency)
      expect(price).toBe(50)
    })
  })

  describe('getMeatPrice', () => {
    beforeEach(() => {
      fetch.mockResponseOnce(JSON.stringify(catalog))
    })

    it('should return the price of the cut', async () => {
      const cut = 'vacío'
      const currency = 1
      const price = await getMeatPrice(cut, currency)
      expect(price).toBe(100)
    })

    it('should return "not available" if the cut is not available', async () => {
      const cut = 'matambre'
      const currency = 1
      const price = await getMeatPrice(cut, currency)
      expect(price).toBe('not available')
    })
  })
})
