// Harvester screep model.
// Global Variables.
var common;

// Includes.
common = require('common');

// Harvester.
function Harvester() {
  this.body = [WORK, CARRY, MOVE];
};

Harvester.inheritsFrom(Creep);        

