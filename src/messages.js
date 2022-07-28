const fs = require('fs')
const path = require('path')
const { formatCurrency } = require('./utils')

const positiveStockVariationEmojis = [
  { emoji: ':green-arrow:', variationCost: 0 },
  { emoji: ':green-arrow:', variationCost: 1 },
  { emoji: ':stonks:', variationCost: 2 },
  { emoji: ':stonks:', variationCost: 3 },
  { emoji: ':ricky:', variationCost: 4 },
  { emoji: ':ricky:', variationCost: 5 },
  { emoji: ':champagne:', variationCost: 6 },
  { emoji: ':champagne:', variationCost: 7 },
  { emoji: ':ultraparrot:', variationCost: 8 },
  { emoji: ':ultraparrot:', variationCost: 9 },
]

const negativeStockVariationEmojis = [
  { emoji: ':red-arrow:', variationCost: 0 },
  { emoji: ':red-arrow:', variationCost: 1 },
  { emoji: ':stonks_down:', variationCost: 2 },
  { emoji: ':stonks_down:', variationCost: 3 },
  { emoji: ':panik:', variationCost: 4 },
  { emoji: ':panik:', variationCost: 5 },
  { emoji: ':everythingisfine:', variationCost: 6 },
  { emoji: ':everythingisfine:', variationCost: 7 },
  { emoji: ':panic-2804:', variationCost: 8 },
  { emoji: ':panic-2804:', variationCost: 9 },
]

/**
 *
 * @param {Object} param0
 * @param {number} param0.dogeCount
 * @param {string} param0.userId
 * @returns
 */
const getDogeMessage = ({ dogeCount, userId }) => {
  return `Oh no! :doge: Looks like <@${userId}> just got doge'd! You're now at ${dogeCount} doge's. :doge:`
}

const getDogeListMessage = ({ roomUsers, title }) => {
  let message = ''
  message += `:doge: *Doge'd ${title}* :doge:`
  roomUsers.forEach(
    (roomUser) => (message += `\n- ${roomUser.name}: ${roomUser.doge_count}`)
  )
  return message
}

const helpMessage = () => {
  const helpText = fs.readFileSync(
    path.join(__dirname, 'assets', 'help.md'),
    'utf-8'
  )
  return helpText
}

const infoMessage = () => {
  const infoText = fs.readFileSync(
    path.join(__dirname, 'assets', 'info.md'),
    'utf-8'
  )
  return infoText
}

const getRateMessage = () => {
  return ':dogespin: Oops! Going too fast there :dogespin:'
}

const getStockMessage = (price, variation = 0) => {
  price = formatCurrency(price)
  let message = `:dogespin: WOW! Such stock price: ${price} :dogespin: very change at ${variation}%`
  const absolusteVariation = Math.abs(variation)
  if (variation > 0) {
    positiveStockVariationEmojis.forEach((emoji) => {
      if (absolusteVariation >= emoji.variationCost) {
        message += ` ${emoji.emoji}`
      }
    })
  } else if (variation < 0) {
    negativeStockVariationEmojis.forEach((emoji) => {
      if (absolusteVariation >= emoji.variationCost) {
        message += ` ${emoji.emoji}`
      }
    })
  }
  return message
}

const getMeatMessage = (cut, price) => {
  if (!isNaN(price)) {
    price = formatCurrency(price)
  }
  return `:doge2: wow, much meat, very ${cut} at ${price} :doge2:`
}

const getUSDMeatMessage = (cut, price) => {
  price = formatCurrency(price)
  return `:doge2: wow, much meat, very ${cut} at ${price} :dollar: :doge2:`
}

const getDolarBlueMessage = (price) => {
  price = formatCurrency(price)
  return `:dogecoin: WOW! Dolar Blue price: ${price} :dogecoin:`
}

const getCRMBlueMessage = (price) => {
  price = formatCurrency(price)
  return `:dogecoin: WOW! CRM at Dolar Blue price: ${price} :dogecoin:`
}

module.exports = {
  getDogeMessage,
  getDogeListMessage,
  helpMessage,
  infoMessage,
  getRateMessage,
  getStockMessage,
  getDolarBlueMessage,
  getCRMBlueMessage,
  getMeatMessage,
  getUSDMeatMessage,
}
