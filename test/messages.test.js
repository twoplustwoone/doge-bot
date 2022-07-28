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
    describe('when variation is 0', () => {
      it('should return basic stock message', () => {
        const message = getStockMessage(123.45)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at 0%'
        )
      })
    })

    describe('when variation is positive', () => {
      it('should return positive stock message', () => {
        const message = getStockMessage(123.45, 0.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at 0.12% :green-arrow:'
        )
      })

      it('should add another :green-arrow: if variation is between 1 and 2', () => {
        const message = getStockMessage(123.45, 1.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at 1.12% :green-arrow: :green-arrow:'
        )
      })

      it('should also add a :stonks: if variation is between 2 and 3', () => {
        const message = getStockMessage(123.45, 2.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at 2.12% :green-arrow: :green-arrow: :stonks:'
        )
      })

      it('should add another :stonks: if variation is between 3 and 4', () => {
        const message = getStockMessage(123.45, 3.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at 3.12% :green-arrow: :green-arrow: :stonks: :stonks:'
        )
      })

      it('should also add a :ricky: if variation is between 4 and 5', () => {
        const message = getStockMessage(123.45, 4.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at 4.12% :green-arrow: :green-arrow: :stonks: :stonks: :ricky:'
        )
      })

      it('should add another :ricky: if variation is between 5 and 6', () => {
        const message = getStockMessage(123.45, 5.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at 5.12% :green-arrow: :green-arrow: :stonks: :stonks: :ricky: :ricky:'
        )
      })

      it('should also add a :champagne: if variation is between 6 and 7', () => {
        const message = getStockMessage(123.45, 6.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at 6.12% :green-arrow: :green-arrow: :stonks: :stonks: :ricky: :ricky: :champagne:'
        )
      })

      it('should add another :champagne: if variation is between 7 and 8', () => {
        const message = getStockMessage(123.45, 7.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at 7.12% :green-arrow: :green-arrow: :stonks: :stonks: :ricky: :ricky: :champagne: :champagne:'
        )
      })

      it('should also add a :ultraparrot: if variation is between 8 and 9', () => {
        const message = getStockMessage(123.45, 8.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at 8.12% :green-arrow: :green-arrow: :stonks: :stonks: :ricky: :ricky: :champagne: :champagne: :ultraparrot:'
        )
      })

      it('should add another :ultraparrot: if variation is between 9 and 10', () => {
        const message = getStockMessage(123.45, 9.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at 9.12% :green-arrow: :green-arrow: :stonks: :stonks: :ricky: :ricky: :champagne: :champagne: :ultraparrot: :ultraparrot:'
        )
      })
    })

    describe('when variation is negative', () => {
      it('should return positive stock message', () => {
        const message = getStockMessage(123.45, -0.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at -0.12% :red-arrow:'
        )
      })

      it('should add another :red-arrow: if variation is between -1 and -2', () => {
        const message = getStockMessage(123.45, -1.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at -1.12% :red-arrow: :red-arrow:'
        )
      })

      it('should also add a :stonks_down: if variation is between -2 and -3', () => {
        const message = getStockMessage(123.45, -2.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at -2.12% :red-arrow: :red-arrow: :stonks_down:'
        )
      })

      it('should add another :stonks_down: if variation is between -3 and -4', () => {
        const message = getStockMessage(123.45, -3.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at -3.12% :red-arrow: :red-arrow: :stonks_down: :stonks_down:'
        )
      })

      it('should also add a :panik: if variation is between -4 and -5', () => {
        const message = getStockMessage(123.45, -4.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at -4.12% :red-arrow: :red-arrow: :stonks_down: :stonks_down: :panik:'
        )
      })

      it('should add another :panik: if variation is between -5 and -6', () => {
        const message = getStockMessage(123.45, -5.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at -5.12% :red-arrow: :red-arrow: :stonks_down: :stonks_down: :panik: :panik:'
        )
      })

      it('should also add a :everythingisfine: if variation is between -6 and -7', () => {
        const message = getStockMessage(123.45, -6.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at -6.12% :red-arrow: :red-arrow: :stonks_down: :stonks_down: :panik: :panik: :everythingisfine:'
        )
      })

      it('should add another :everythingisfine: if variation is between -7 and -8', () => {
        const message = getStockMessage(123.45, -7.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at -7.12% :red-arrow: :red-arrow: :stonks_down: :stonks_down: :panik: :panik: :everythingisfine: :everythingisfine:'
        )
      })

      it('should also add a :panic-2804: if variation is between -8 and -9', () => {
        const message = getStockMessage(123.45, -8.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at -8.12% :red-arrow: :red-arrow: :stonks_down: :stonks_down: :panik: :panik: :everythingisfine: :everythingisfine: :panic-2804:'
        )
      })

      it('should add another :panic-2804: if variation is between -9 and -10', () => {
        const message = getStockMessage(123.45, -9.12)
        expect(message).toBe(
          ':dogespin: WOW! Such stock price: $123.45 :dogespin: very change at -9.12% :red-arrow: :red-arrow: :stonks_down: :stonks_down: :panik: :panik: :everythingisfine: :everythingisfine: :panic-2804: :panic-2804:'
        )
      })
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
