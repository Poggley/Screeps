// Harvester screep model

var common = require('common');

// Harvester
function creepProto() {
  this.bodyparts = [WORK, CARRY, MOVE];

  this.action = function() {
    	if(creep.carry.energy < creep.carryCapacity) {
    		var sources = creep.room.find(FIND_SOURCES);
    		creep.moveTo(sources[0]);
    		creep.harvest(sources[0]);
    	}
    	else {
    		creep.moveTo(Game.spawns.Spawn1);
    		creep.transferEnergy(Game.spawns.Spawn1)
    	}
  }
};

module.exports = { creepProto };
