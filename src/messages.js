const fs = require('fs')
const path = require('path')

const getDogeMessage = ({ dogeCount, userId }) => {
    return `Oh no! :doge: Looks like <@${userId}> just got doge'd! You're now at ${dogeCount} doge's. :doge:`
}

const getDogeListMessage = ({ roomUsers }) => {
    let message = ''
    message += `:doge: *Doge'd list* :doge:`
    roomUsers.forEach(roomUser => message += `\n- <@${roomUser.user_id}>: ${roomUser.doge_count}`)
    return message
}

const helpMessage = () => {
    const helpText = fs.readFileSync(path.join(__dirname, 'assets', 'help.md'), 'utf-8')
    console.log('helpText:', helpText)
    return helpText
}

module.exports = { getDogeMessage, getDogeListMessage, helpMessage }