// Harvester screep model
var baseCreep = require('basecreep');

// Harvester
function creepProto(creep) {
  this.bodyparts = [WORK, CARRY, MOVE];
  this.totalEnergy = baseCreep.totalEnergy(this);

  this.action = function () {
    if (creep.carry.energy < creep.carryCapacity) {
      var sources = creep.room.find(FIND_SOURCES);
      creep.moveTo(sources[0]);
      creep.harvest(sources[0]);
    }
    else {
      creep.moveTo(Game.spawns.Spawn1);
      creep.transferEnergy(Game.spawns.Spawn1);
    }
  }
};

module.exports = { creepProto };
