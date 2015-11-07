// Main code

var spawnController = require('spawnController');
var flagCreate = require('flagCreate');

// Iterate over spawns
for (var spawn_name in Game.spawns) {
  var spawn = Game.spawns[spawn_name];
  // Create flags used for the organisation of screeps
  flagCreate(spawn);
  // Set behaviour of spawn
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
