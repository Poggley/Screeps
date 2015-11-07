// GENERAL COMMENTS/DESCRIPTION.
// Global Variables.
var spawn_name;
var spawn;
var spawnController;

// Includes.
spawnController = require('spawnController');

// Main.
for (spawn_name in Game.spawns) {
  // Set up each spawn.
	spawn = Game.spawns[spawn_name];
	spawnController.makeCreep(spawn);
}