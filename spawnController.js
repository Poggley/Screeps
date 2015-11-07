// Functions governing the spawn

module.exports = {
  // Decides which creep to make and creates it
  makeCreep: function (spawn) {
    var creep_role = 'harvester'; // TODO get this from elsewhere
    var creep_type = require(creep_role);
    var proto = new creep_type.creepProto();

    spawn.createCreep(proto.bodyparts, null, { role : creep_role });
  }
};
