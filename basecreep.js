// Generic creep model

// Locals
var bodyPartWeightings = {
  MOVE: 50,
  WORK: 100,
  CARRY: 50,
  ATTACK: 80,
  RANGED_ATTACK: 150,
  HEAL: 200,
  TOUGH: 10
};

// Creep
function totalEnergy(creepProto) {
  var totalEnergy = 0;
  for (var part in creepProto.bodyparts) {
    totalEnergy += bodyPartWeightings[part];
  };

  return totalEnergy;
};

module.exports = { totalEnergy };
