// Harvester screep model.

// Global Variables.
var common;

// Includes.
common = require('common');

// Harvester.
function Harvester() {
  this.bodyparts = [WORK, CARRY, MOVE];
};

Harvester.inheritsFrom(Creep);

module.exports = { Harvester };
