const serviceFactory = require('../src/service');

module.exports = function main(robot) {
    const service = serviceFactory(robot);
    const commands = [
        [/^:doge(.*):$/i, service.addDoge],
        [/^(get doges|list doges|doge get|doge list)$/i, service.getDoges],
        [/^(doge help)$/i, service.getHelp],
        [/^(doge info)$/i, service.getInfo],
        [/^(doge history)$/i, service.getHistory],
    ]

    commands.forEach(c => robot.respond(c[0], c[1]))

    robot.hear(/^:doge(.*):$/i, service.addDoge)
    robot.hear(/^(get doges|list doges|doge get|doge list)$/i, service.getDoges)
    robot.hear(/^(doge help)$/i, service.getHelp)
    robot.hear(/^(doge info)$/i, service.getInfo)
    // TODO
    // robot.hear(/^(doge scan)$/i, service.scan)
    robot.hear(/^(doge history)$/i, service.getHistory)
}