const serviceFactory = require('../src/service');

module.exports = function main(robot) {
    const service = serviceFactory(robot);

    robot.hear(/:doge:/i, service.addDoge)
    // TODO
    // robot.hear(/get doge/i, service.getDoges)
}