const fs = require('fs')
const path = require('path')

const getDogeMessage = ({ dogeCount, userId }) => {
    return `Oh no! :doge: Looks like <@${userId}> just got doge'd! You're now at ${dogeCount} doge's. :doge:`
}

const getDogeListMessage = ({ roomUsers, title }) => {
    let message = ''
    message += `:doge: *Doge'd ${title}* :doge:`
    roomUsers.forEach(roomUser => message += `\n- ${roomUser.name}: ${roomUser.doge_count}`)
    return message
}

const helpMessage = () => {
    const helpText = fs.readFileSync(path.join(__dirname, 'assets', 'help.md'), 'utf-8')
    return helpText
}

const infoMessage = () => {
    const infoText = fs.readFileSync(path.join(__dirname, 'assets', 'info.md'), 'utf-8')
    return infoText
}

const getRateMessage = () => {
    return ':dogespin: Oops! Going too fast there :dogespin:'
}

const getStockMessage = (price) => {
    const stockText = `:dogespin: WOW! Stock price: ${price} :dogespin:`
    return stockText
}

module.exports = { getDogeMessage, getDogeListMessage, helpMessage, infoMessage, getRateMessage, getStockMessage }