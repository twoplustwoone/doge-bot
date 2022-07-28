const {
  getCRMBlueMessage,
  getDogeListMessage,
  getDogeMessage,
  getDolarBlueMessage,
  getMeatMessage,
  getRateMessage,
  getStockMessage,
  getUSDMeatMessage,
  helpMessage,
  infoMessage,
} = require('../src/messages')

describe('messages', () => {
  describe('helpMessage', () => {
    it('should return a help message', () => {
      const message = helpMessage()
      expect(message).toBe(
        `:doge-cool: _Hey there_ :doge-cool:

- --- Very help --- \\*

* get doges | list doges | doge list | doge get -> Get doge count list this week for this channel
* doge history -> Get all time doge count for this channel
* doge info -> Get bot info
* doge help -> Show this message
  :doge_gif: Much message, so list :doge_gif:
`
      )
    })
  })

  describe('infoMessage', () => {
    it('should return an info message', () => {
      const message = infoMessage()
      expect(message).toBe(
        `:doge-cool: _Hey there_ :doge-cool:
Doge Bot is a bot used for counting how many :doge:s each person in a channel has sent
Why? Because _*Trust is our #1 value*_
And if you leave your computer unattended, then there is much doge :doge3d:

There are two counters - a temporary one and a total one. The temporary one resets at the end of the week. Counters are unique per channel.

_(developed @ :mulenew:)_
_*Trust is our #1 value*_ - if you would like to see the source code or suggest features, feel free:
https://github.com/TwoPlusTwoOne/doge-bot
`
      )
    })
  })

  describe('getDogeMessage', () => {
    it('should return a doge message', () => {
      const message = getDogeMessage({ dogeCount: 23, userId: 'testUserId' })
      expect(message).toBe(
        "Oh no! :doge: Looks like <@testUserId> just got doge'd! You're now at 23 doge's. :doge:"
      )
    })
  })

  describe('getDogeListMessage', () => {
    it('should return a doge list message', () => {
      const message = getDogeListMessage({
        roomUsers: [
          { name: 'testUser1', doge_count: 23 },
          { name: 'testUser2', doge_count: 42 },
        ],
        title: 'testTitle',
      })
      expect(message).toBe(
        ":doge: *Doge'd testTitle* :doge:\n- testUser1: 23\n- testUser2: 42"
      )
    })
  })

  describe('getRateMessage', () => {
    it('should return a rate message', () => {
      const message = getRateMessage()
      expect(message).toBe(':dogespin: Oops! Going too fast there :dogespin:')
    })
  })

  describe('getStockMessage', () => {
    it('should return a stock message', () => {
      const message = getStockMessage(123.45)
      expect(message).toBe(':dogespin: WOW! Stock price: $123.45 :dogespin:')
    })

    it('should return a stock message with delta over 10', () => {
      const message = getStockMessage(123.45, 11)
      expect(message).toBe(
        ':dogespin: WOW! Stock price: $123.45 :dogespin: much :stonks: :ricky: :champagne:'
      )
    })

    it('should return a stock message with delta between 5 and 10', () => {
      const message = getStockMessage(123.45, 7)
      expect(message).toBe(
        ':dogespin: WOW! Stock price: $123.45 :dogespin: much :stonks: :ricky:'
      )
    })

    it('should return a stock message with delta between 1 and 5', () => {
      const message = getStockMessage(123.45, 3)
      expect(message).toBe(
        ':dogespin: WOW! Stock price: $123.45 :dogespin: much :stonks:'
      )
    })

    it('should return a stock message with delta between -1 and 1', () => {
      const message = getStockMessage(123.45, 0)
      expect(message).toBe(':dogespin: WOW! Stock price: $123.45 :dogespin:')
    })

    it('should return a stock message with delta less than -10', () => {
      const message = getStockMessage(123.45, -11)
      expect(message).toBe(
        ':dogespin: oh noo! Stock price: $123.45 :dogespin: much :panik: :everythingisfine:'
      )
    })

    it('should return a stock message with delta between -5 and -10', () => {
      const message = getStockMessage(123.45, -7)
      expect(message).toBe(
        ':dogespin: oh noo! Stock price: $123.45 :dogespin: much :panik:'
      )
    })

    it('should return a stock message with delta between -1 and -5', () => {
      const message = getStockMessage(123.45, -3)
      expect(message).toBe(
        ':dogespin: oh noo! Stock price: $123.45 :dogespin: much :stonks_down:'
      )
    })
  })

  describe('getMeatMessage', () => {
    it('should return meat message with valid number', () => {
      const message = getMeatMessage('asado', 123.45)
      expect(message).toBe(
        ':doge2: wow, much meat, very asado at $123.45 :doge2:'
      )
    })

    it('should return meat message with invalid number', () => {
      const message = getMeatMessage('asado', 'asdf')
      expect(message).toBe(':doge2: wow, much meat, very asado at asdf :doge2:')
    })
  })

  describe('getUSDMeatMessage', () => {
    it('should return USD meat message', () => {
      const message = getUSDMeatMessage('asado', 123.45)
      expect(message).toBe(
        ':doge2: wow, much meat, very asado at $123.45 :dollar: :doge2:'
      )
    })
  })

  describe('getDolarBlueMessage', () => {
    it('should return dollar blue message', () => {
      const message = getDolarBlueMessage(123.45)
      expect(message).toBe(
        ':dogecoin: WOW! Dolar Blue price: $123.45 :dogecoin:'
      )
    })
  })

  describe('getCRMBlueMessage', () => {
    it('should return CRM blue message', () => {
      const message = getCRMBlueMessage(123.45)
      expect(message).toBe(
        ':dogecoin: WOW! CRM at Dolar Blue price: $123.45 :dogecoin:'
      )
    })
  })
})
