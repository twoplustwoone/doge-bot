const messages = require('./messages');
const repository = require('./repository')

module.exports = function commands(robot) {
    return { addDoge, getDoges }

    async function addDoge(res) {
        console.log('message:', message)
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
        const message = messages.getDogeListMessage({ roomUsers })

        robot.messageRoom(room, message)
    }

    async function resetDoges({ userId, room, dogeCount }) {
        await repository.resetCurrentDoges({ userId, room })
        const message = messages.getResetDogesMessage({ userId, dogeCount })
        robot.messageRoom(room, message)
    }
}