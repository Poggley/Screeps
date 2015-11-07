// Main code

var spawnController = require('spawnController');

// Iterate over spawns
for (var spawn_name in Game.spawns) {
  // Set behaviour of spawn
  var spawn = Game.spawns[spawn_name];
  spawnController.makeCreep(spawn);
}

// Iterate over screeps
for (var creep_name in Game.creeps) {
  // Set behaviour of creep
  var creep = Game.creeps[creep_name];
  var creep_type = require(creep.memory.role);
  var proto = new creep_type.creepProto(creep);
  proto.action();
}
