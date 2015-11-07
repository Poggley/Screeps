// Creates flags used for the organisation of screeps

flagCreate = function (spawn) {
    if(!spawn.room.lookForAt('flag',25,25)[0]) {
        spawn.room.createFlag(25,25);
    }
    var gatherFlag;
    if(spawn.room.lookForAt('flag',25,25)[0] && !gatherFlag) {
        gatherFlag = spawn.room.lookForAt('flag',25,25)[0];
        spawn.memory.gatherFlag = gatherFlag;
    }

    if(!spawn.room.lookForAt('flag',21,25)[0]) {
        spawn.room.createFlag(21,25);
    }
    var healFlag;
    if(spawn.room.lookForAt('flag',21,25)[0] && !healFlag) {
        healFlag = spawn.room.lookForAt('flag',21,25)[0];
        spawn.memory.healFlag = healFlag;
    }
}

module.exports = { flagCreate }
