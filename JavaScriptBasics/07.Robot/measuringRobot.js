const compareRobots = require('./lib/compareRobots');
const randomRobot = require('./robots/randomRobot');
const routeRobot = require('./robots/routeRobot');
const goalOrientedRobot = require('./robots/goalOrientedRobot');

compareRobots(routeRobot, [], goalOrientedRobot, []);