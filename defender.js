// Defender screep model
var baseCreep = require('basecreep');

// Defender
function creepProto(creep) {
  this.bodyparts = [TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, MOVE, MOVE, ATTACK, MOVE];
  this.totalEnergy = baseCreep.totalEnergy(this);

  this.rest = function () {
    if (creep.hits < creep.hitsMax) {
      creep.moveTo(Game.spawns.Spawn1.memory.healFlag);
    } else {
      creep.moveTo(Game.spawns.Spawn1.memory.gatherFlag);
    }
  },

  this.action = function () {
    var targets = creep.room.find(FIND_HOSTILE_CREEPS, {
      filter: function (i) {
        return i.owner.username != 'Source Keeper';
      }
    });
    if (targets.length) {
      if (creep.getActiveBodyparts(ATTACK) >= 1) { //if it possesses an attack part
        var target = creep.pos.findClosest(targets);  //TODO may be cpu intensive
        creep.moveTo(target);
        creep.attack(target);
      } else { this.rest(); }
    } else { this.rest(); }
  }
};

module.exports = { creepProto };
