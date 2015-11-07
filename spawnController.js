// Functions governing the spawn.
// Global Variables.
var harvester;

// Includes.
harvester = require('harvester');

// spawnController.
module.exports = {
  makeCreep: function (spawn) {
    // Decides which creep to make and creates it.
    // Local Variables
    var creep;
    creep = new harvester();
    // makeCreep
    spawn.createCreep(creep.body, null);
  }
};

