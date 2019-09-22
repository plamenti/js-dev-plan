const compareRobots = require('./lib/compareRobots');
const goalOrientedRobot = require('./robots/goalOrientedRobot');
const lazyRobot = require('./robots/lazyRobot');

compareRobots(lazyRobot, [], goalOrientedRobot, []);