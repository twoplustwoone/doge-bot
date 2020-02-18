const serviceFactory = require('../src/service');

module.exports = function main(robot) {
    const service = serviceFactory(robot);

    robot.hear(/:doge(.*):/i, service.addDoge)
    robot.hear(/(get doges|list doges|doge get|doge list)/i, service.getDoges)
    robot.hear(/(doge help)/i, service.getHelp)
    robot.hear(/(doge info)/i, service.getInfo)
    robot.hear(/(doge history)/i, service.getHistory)
    // TODO
    // robot.hear(/^(doge scan)$/i, service.scan)
    robot.hear(/(doge history)/i, service.getHistory)
}