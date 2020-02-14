const fs = require('fs')
const path = require('path')

const getDogeMessage = ({ currentDogeCount, totalDogeCount, userId }) => {
    return `Oh no! :doge: Looks like <@${userId}> just got doge'd! You're now at ${currentDogeCount} doge's. :doge:\nTotal doge's: ${totalDogeCount}`
}

const getResetDogesMessage = ({ userId, dogeCount }) => {
    return `:party::party::party::party::party: Congratulations to <@${userId}> who just reached ${dogeCount} doge's! :party::party::party::party::party:`
}

const getDogeListMessage = ({ roomUsers }) => {
    let message = ''
    message += `:doge: *Doge'd list* :doge:`
    roomUsers.forEach(roomUser => message += `\n- <@${roomUser.user_id}>: ${roomUser.total_doge_count}`)
    return message
}

const helpMessage = () => {
    const helpText = fs.readFileSync(path.join(__dirname, 'assets', 'help.md'))
    console.log('helpText:', helpText)
    return helpText
}

module.exports = { getDogeMessage, getResetDogesMessage, getDogeListMessage, helpMessage }