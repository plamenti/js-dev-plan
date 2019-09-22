const randomPick = require('./randomPick');
const roadGraph = require('./roadGraph');

function randomRobot(state) {
    return { direction: randomPick(roadGraph[state.place]) };
}

module.exports = randomRobot;