const runRobot = require('./runRobot');
const getAverageNumber = require('./getAverageNumber');
const VillageState = require('./villageState');

function compareRobots(robot1, memory1, robot2, memory2) {
    const robot1Results = [];
    const robot2Results = [];
    for (let i = 0; i < 100; i++) {
        const randomVillageState = VillageState.random();
        robot1Results.push(runRobot(randomVillageState, robot1, memory1));
        robot2Results.push(runRobot(randomVillageState, robot2, memory1));
    }

    robot1AverageSteps = getAverageNumber(robot1Results);
    robot2AverageSteps = getAverageNumber(robot2Results);

    console.log(`Average number of steps for robot 1: ${robot1AverageSteps}`);
    console.log(`Average number of steps for robot 2: ${robot2AverageSteps}`);
}

module.exports = compareRobots;