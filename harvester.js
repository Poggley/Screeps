// Harvester screep model.
// Global Variables.
var common;

// Includes.
common = require('common');

// harvester.
function harvester() {};
harvester.inheritsFrom(creep);        
harvester.prototype.body = [WORK, CARRY, MOVE];

