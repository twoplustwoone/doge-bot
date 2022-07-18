const serviceFactory = require('../src/service')
const { WebClient } = require("@slack/client")

module.exports = function main(robot) {
    console.log('main...')
    const web = new WebClient(robot.adapter.options.token)
    const service = serviceFactory(robot, web);

    robot.hear(/:doge(.*):/i, service.addDoge)
    robot.hear(/(get doges|list doges|doge get|doge list)/i, service.getDoges)
    robot.hear(/(doge help)/i, service.getHelp)
    robot.hear(/(doge info)/i, service.getInfo)
    robot.hear(/(doge history)/i, service.getHistory)
    robot.hear(/^(doge crm)$/i, service.getCRMStock)
}
