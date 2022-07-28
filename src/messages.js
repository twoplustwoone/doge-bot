const fs = require('fs')
const path = require('path')
const { formatCurrency } = require('./utils')

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

const getStockMessage = (price, delta = 0) => {
  price = formatCurrency(price)
  if (delta > 10) {
    return `:dogespin: WOW! Stock price: ${price} :dogespin: much :stonks: :ricky: :champagne:`
  }
  if (delta > 5) {
    return `:dogespin: WOW! Stock price: ${price} :dogespin: much :stonks: :ricky:`
  }
  if (delta > 1) {
    return `:dogespin: WOW! Stock price: ${price} :dogespin: much :stonks:`
  }
  if (delta < -10) {
    return `:dogespin: oh noo! Stock price: ${price} :dogespin: much :panik: :everythingisfine:`
  }
  if (delta < -5) {
    return `:dogespin: oh noo! Stock price: ${price} :dogespin: much :panik:`
  }
  if (delta < -1) {
    return `:dogespin: oh noo! Stock price: ${price} :dogespin: much :stonks_down:`
  }
  return `:dogespin: WOW! Stock price: ${price} :dogespin:`
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
