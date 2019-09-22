const randomPick = require('../lib/randomPick');
const roadGraph = require('../lib/roadGraph');

function randomRobot(state) {
    return { direction: randomPick(roadGraph[state.place]) };
}

module.exports = randomRobot;