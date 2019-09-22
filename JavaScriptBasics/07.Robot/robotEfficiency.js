const VillageState = require('./villageState');
const goalOrientedRobot = require('./goalOrientedRobot');
const lazyRobot = require('./lazyRobot');


function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);

            return turn;
        }

        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

function getAverageNumber(arr) {
    const sum = arr.reduce((a, b) => a + b);

    return sum / arr.length;
}

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

compareRobots(lazyRobot, [], goalOrientedRobot, []);