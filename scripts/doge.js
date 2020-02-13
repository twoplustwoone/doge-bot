const serviceFactory = require('../src/service');

module.exports = function main(robot) {
    const service = serviceFactory(robot);

    robot.hear(/^:doge(.*):$/i, service.addDoge)
    robot.hear(/^get doges$/i, service.getDoges)
}