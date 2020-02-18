const db = require('./db');
const utils = require('./utils')

async function addDoge({ room, userId, userName, week = utils.getWeekNumber(), year = utils.getYear() }) {
    await assertRoom({ room })
    await assertUser({ userId, userName })
    await assertRoomUser({ userId, room, week, year })

    await db.transaction(async (transaction) => {
        await db('room_user')
            .where({ room_id: room, user_id: userId, week, year })
            .increment({ doge_count: 1 })
            .update({ updated_at: new Date().toISOString() })
        await transaction.commit();
    })
}

async function getRoom({ room }) {
    const roomObj = await db('rooms').where({ room_id: room })
    return roomObj[0]
}

async function getRoomUser({ room, userId, week = utils.getWeekNumber(), year = utils.getYear() }) {
    const roomUser = await db('room_user').where({ room_id: room, user_id: userId, week, year })
    return roomUser[0]
}

async function getUser({ userId }) {
    const user = await db('users').where({ user_id: userId })
    return user[0]
}

async function createUser({ userId, userName }) {
    await db.transaction(async (transaction) => {
        await db('users').insert({
            user_id: userId,
            name: userName,
            created_at: new Date().toISOString()
        })
        await transaction.commit()
    })
}

async function createRoomUser({ userId, room, week, year }) {
    await db.transaction(async (transaction) => {
        const now = new Date().toISOString()
        await db('room_user').insert({
            user_id: userId,
            room_id: room,
            doge_count: 0,
            created_at: now,
            updated_at: now,
            week,
            year,
        })
        await transaction.commit()
    })
}

async function createRoom({ room }) {
    await db.transaction(async (transaction) => {
        const now = new Date().toISOString()
        await db('rooms').insert({
            room_id: room,
            created_at: now,
            oldest_doge_at: now,
        })
        await transaction.commit()
    })
}

async function assertRoom({ room }) {
    const roomObj = await getRoom({ room })
    if (!roomObj) {
        await createRoom({ room })
    }
}

async function assertUser({ userId, userName }) {
    const user = await getUser({ userId })
    if (!user) {
        await createUser({ userId, userName })
    }
}

async function assertRoomUser({ userId, room, week, year }) {
    const roomUser = await getRoomUser({ userId, room, week, year })
    if (!roomUser) {
        await createRoomUser({ userId, room, week, year })
    }
}

async function getRoomUsersForRoom({ room, week = utils.getWeekNumber(), year = utils.getYear() }) {
    const roomUsers = await db('room_user').where({ room_id: room, week, year })
    return roomUsers
}

async function getRoomHistory({ room }) {
    return await db.select('user_id').from('room_user').where({ room_id: room }).sum('doge_count as doge_count').groupBy('user_id')
}

async function updateLastRequest({ room, userId, week = utils.getYear(), year = utils.getYear() }) {
    await db.transaction((transaction) => {
        await db('room_user').where({ room_id: room, week, year, user_id: userId }).update({ last_request_at: new Date().toISOString() })
        await transaction.commit()
    })
}

module.exports = { addDoge, getRoom, getRoomUser, getUser, getRoomUsersForRoom, getRoomHistory, updateLastRequest }