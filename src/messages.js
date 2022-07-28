const fs = require('fs')
const path = require('path')
const { formatCurrency } = require('./utils')

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
  if(!isNaN(price)) {
    price = formatCurrency(price)
  }
  return `:doge2: wow, much meat, very ${cut} at ${price} :doge2:`
}

const getUSDMeatMessage = (cut, price) => {
  price = formatCurrency(price)
  return `:doge2: wow, much meat, very ${cut} at ${price} :dollar: :doge2:`
}

const getDolarBlueMessage = (price) => {
  const dolarBlueText = `:dogecoin: WOW! Dolar Blue price: $${formatCurrency(
    price
  )} :dogecoin:`
  return dolarBlueText
}

const getCRMBlueMessage = (price) => {
  const crmBlueText = `:dogecoin: WOW! CRM at Dolar Blue price: $${formatCurrency(
    price
  )} :dogecoin:`
  return crmBlueText
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
  getUSDMeatMessage
}
