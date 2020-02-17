const messages = require('./messages');
const repository = require('./repository')

module.exports = function commands(robot) {
    return { addDoge, getDoges, getHelp }

    async function addDoge(res) {
        console.log('message:', res.message)
        const { room, user } = res.message;
        const { id: userId } = user;
        await repository.addDoge({ userId, room });
        const roomUser = await repository.getRoomUser({ room, userId })
        const roomObj = await repository.getRoom({ room })
        const { curr_doge_count: currentDogeCount, total_doge_count: totalDogeCount } = roomUser
        const { doge_count: dogeCount } = roomObj

        const message = messages.getDogeMessage({ currentDogeCount, totalDogeCount, userId, })

        robot.messageRoom(room, message)

        if (currentDogeCount >= dogeCount) {
            await resetDoges({ userId, room, dogeCount })
        }
    }

    async function getDoges(res) {
        const { room } = res.message;
        const roomUsers = await repository.getRoomUsersForRoom({ room })
        roomUsers.sort((a, b) => a.total_doge_count < b.total_doge_count ? -1 : 1)
        const message = messages.getDogeListMessage({ roomUsers })

        robot.messageRoom(room, message)
    }

    async function resetDoges({ userId, room, dogeCount }) {
        await repository.resetCurrentDoges({ userId, room })
        const message = messages.getResetDogesMessage({ userId, dogeCount })
        robot.messageRoom(room, message)
    }

    async function getHelp(res) {
        const { room } = res.message
        const message = messages.helpMessage();
        robot.messageRoom(room, message)
    }
}