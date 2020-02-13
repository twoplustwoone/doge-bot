const db = require('./db');

async function addDoge({ room, userId }) {
    assertRoom({ room })
    assertUser({ userId })
    assertRoomUser({ userId, room })

    await db.transaction(async (transaction) => {
        await db('room_user').where({ room_id: room, user_id: userId }).increment({ curr_doge_count: 1, total_doge_count: 1 })
        await transaction.commit();
    })
}

async function getRoom({ room }) {
    const roomObj = await db('rooms').where({ room_id: room })
    return roomObj[0]
}

async function getRoomUser({ room, userId }) {
    const roomUser = await db('room_user').where({ room_id: room, user_id: userId })
    return roomUser[0]
}

async function getUser({ userId }) {
    const user = await db('users').where({ user_id: userId })
    return user[0]
}

async function resetCurrentDoges({ room, userId }) {
    await db.transaction(async (transaction) => {
        await db('room_user').where({ room_id: room, user_id: userId }).update({ curr_doge_count: 0 })
        await transaction.commit();
    })
}

async function addUser({ userId }) {
    await db.transaction(async (transaction) => {
        await db.insert({ user_id: userId }).into('users')
        await transaction.commit()
    })
}

async function addRoomUser({ userId, room }) {
    await db.transaction(async (transaction) => {
        await db.insert({ user_id: userId, room_id: room, curr_doge_count: 0, total_doge_count: 0 }).into('room_user')
        await transaction.commit()
    })
}

async function addRoom({ room, dogeCount }) {
    await db.transaction(async (transaction) => {
        const result = await db('rooms').insert({ room_id: room, doge_count: dogeCount })
        await transaction.commit()
    })
}

async function assertRoom({ room }) {
    const roomObj = await getRoom({ room })
    if (!roomObj) {
        await addRoom({ room, dogeCount: 5 })
    }
}

async function assertUser({ userId }) {
    const user = await getUser({ userId })
    if (!user) {
        await addUser({ userId })
    }
}

async function assertRoomUser({ userId, room }) {
    const roomUser = await getRoomUser({ userId, room })
    if (!roomUser) {
        await addRoomUser({ userId, room })
    }
}

module.exports = { addDoge, getRoom, getRoomUser, getUser, resetCurrentDoges }