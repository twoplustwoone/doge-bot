const serviceFactory = require('../src/service')

describe('service', () => {
  const postMessageMock = jest.fn()
  const mockRobot = {
    adapter: {
      client: {
        web: {
          chat: {
            postMessage: postMessageMock,
          },
        },
      },
    },
  }
  const service = serviceFactory(mockRobot, jest.fn())
  describe('getCRMStock', () => {
    beforeEach(() => {
      // Current stock price
      fetch.mockResponseOnce(JSON.stringify({ values: [{ open: '120' }] }))
      // Opening stock price
      fetch.mockResponseOnce(JSON.stringify({ values: [{ open: '100' }] }))
    })

    it('should call mock postMessage() with values', async () => {
      const res = {
        match: { input: 'doge crm' },
        message: { user: { room: 'room' } },
      }
      const returnValue = await service.getCRMStock(res)
      console.log({ returnValue })
      expect(postMessageMock).toHaveBeenCalledWith(
        'room',
        ':dogespin: WOW! Such stock price: $120.00 :dogespin: very change at 20.00% :green-arrow: :green-arrow: :stonks: :stonks: :ricky: :ricky: :champagne: :champagne: :ultraparrot: :ultraparrot:'
      )
    })
  })
})
