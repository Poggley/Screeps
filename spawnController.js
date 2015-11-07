// Functions governing the spawn

module.exports = {
  // Decides which creep to make and creates it
  makeCreep: function (spawn) {
    var creep_role = 'harvester'; // TODO get this from elsewhere
    var creep_type = require(creep_role);
    var proto = new creep_type.creepProto();

    spawn.createCreep(proto.bodyparts, null, { role : creep_role });
  },

  // Sets up flags for that spawn
  flagCreate: function (spawn) {
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
};
