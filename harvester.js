// Harvester screep model.
// Global Variables.
var common;

// Includes.
common = require('common');

// Harvester.
function Harvester() {};
Harvester.inheritsFrom(Creep);        
Harvester.prototype.body = [WORK, CARRY, MOVE];

