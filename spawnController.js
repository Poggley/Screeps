// Functions governing the spawn
var chooseCreep = function (spawn) {
  var creepRole = 'harvester';// TODO get this from elsewhere
  return creepRole;
};

module.exports = {
  // Decides which creep to make and creates it
  makeCreep: function (spawn) {
    var creepRole = chooseCreep(spawn);
    var creepType = require(creepRole);
    var proto = new creepType.creepProto();

    spawn.createCreep(proto.bodyparts, null, { role: creepRole });
  },

  // Sets up flags for that spawn
  flagCreate: function (spawn) {
    if (!spawn.room.lookForAt('flag', 25, 25)[0]) {
      spawn.room.createFlag(25, 25);
    }
    var gatherFlag;
    if (spawn.room.lookForAt('flag', 25, 25)[0] && !gatherFlag) {
      gatherFlag = spawn.room.lookForAt('flag', 25, 25)[0];
      spawn.memory.gatherFlag = gatherFlag;
    }

    if (!spawn.room.lookForAt('flag', 21, 25)[0]) {
      spawn.room.createFlag(21, 25);
    }
    var healFlag;
    if (spawn.room.lookForAt('flag', 21, 25)[0] && !healFlag) {
      healFlag = spawn.room.lookForAt('flag', 21, 25)[0];
      spawn.memory.healFlag = healFlag;
    }
  }
};
