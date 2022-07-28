const { formatCurrency, getWeekNumber, getYear } = require('../src/utils')

describe('utils', () => {
  describe('formatCurrency', () => {
    it('should return number as a currency', () => {
      const price = formatCurrency(100)
      expect(price).toBe('$100.00')
    })

    it('should return string as a currency', () => {
      const price = formatCurrency('100')
      expect(price).toBe('$100.00')
    })

    it('should throw error if the price is not a valid number', () => {
      expect(() => formatCurrency('not a number')).toThrow()
    })
  })

  describe('getWeekNumber', () => {
    it('should return the week number for first week of 2020', () => {
      const weekNumber = getWeekNumber(new Date('2020-01-01'))
      expect(weekNumber).toBe(1)
    })

    it('should return the week number for last week of 2020', () => {
      const weekNumber = getWeekNumber(new Date('2022-01-09 12:00:00'))
      expect(weekNumber).toBe(1)
    })

    it('should work for a Sunday', () => {})
  })

  describe('getYear', () => {
    it('should return the year for 2020', () => {
      const year = getYear(new Date('2020-01-02'))
      expect(year).toBe(2020)
    })
  })
})
