const messages = require('./messages');
const repository = require('./repository')

module.exports = function commands(robot, web) {
    const reactions = [
        'doge-cool',
        'doge',
        'doge2',
        'doge3d',
        'doge_gif',
        'doge3',
        'dogecoin',
        'parrot-doge',
        'doge_sunglasses',
    ]

    return { addDoge, getDoges, getHelp, getHistory, getInfo }

    async function addDoge(res) {
        const { room, user } = res.message;
        const { id: userId, name } = user;
        const isGoingTooFast = await checkDogeRate({ userId, room })
        if (isGoingTooFast) {
            const message = messages.getRateMessage()
            robot.messageRoom(room, message)
        } else {
            await repository.addDoge({ userId, room, userName: name });
            const roomUser = await repository.getRoomUser({ room, userId })
            const { doge_count: dogeCount } = roomUser
            const message = messages.getDogeMessage({ dogeCount, userId, })

            robot.messageRoom(room, message)
            addReactions({ message: res.message })
        }
    }

    async function getDoges(res) {
        const { room } = res.message;
        const roomUsers = await repository.getRoomUsersForRoom({ room })
        roomUsers.sort((a, b) => a.doge_count < b.doge_count ? 1 : -1)
        const message = messages.getDogeListMessage({ roomUsers })

        robot.messageRoom(room, message)
    }

    async function getHelp(res) {
        const { room } = res.message
        const message = messages.helpMessage();
        robot.messageRoom(room, message)
    }

    async function getInfo(res) {
        const { room } = res.message
        const message = messages.infoMessage();
        robot.messageRoom(room, message)
    }

    async function getHistory(res) {
        const { room } = res.message
        const roomUsers = await repository.getRoomHistory({ room })
        roomUsers.sort((a, b) => a.doge_count < b.doge_count ? 1 : -1)
        const message = messages.getDogeListMessage({ roomUsers })

        robot.messageRoom(room, message)
    }

    function addReactions({ message }) {
        reactions.forEach(reaction => web.reactions.add({
            name: reaction,
            channel: message.rawMessage.channel,
            timestamp: message.rawMessage.ts,
        }))
    }

    function checkDogeRate({ userId, room }) {
        const roomUser = await repository.getRoomUser({ room, userId })
        const lastUpdated = new Date(roomUser.updated_at).getTime()
        const now = Date.now()
        // one minutue
        return now - lastUpdated < 60000
    }

    // async function scan(res) {
    // const { room } = res.message
    // await repository.
    // }
}