// Define the Pokemon constructor function
function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

// Add methods to the prototype of Pokemon
Pokemon.prototype.callPokemon = function () {
  console.log("I choose you, " + this.name);
};

Pokemon.prototype.attack = function (attackNumber) {
  console.log(this.name + " used " + this.attackList[attackNumber]);
};

// Create instances of Pokemon
var pikachu = new Pokemon("Pikachu", "Electric", [
  "Thunderbolt",
  "Quick Attack",
  "Volt Tackle",
]);
var charmander = new Pokemon("Charmander", "Fire", [
  "Ember",
  "Scratch",
  "Flamethrower",
]);
var squirtle = new Pokemon("Squirtle", "Water", [
  "Water Gun",
  "Bubble",
  "Hydro Pump",
]);

// Call the methods on each Pokemon instance
pikachu.callPokemon();
pikachu.attack(0); // Using the attack method with attack number 0

charmander.callPokemon();
charmander.attack(2); // Using the attack method with attack number 2

squirtle.callPokemon();
squirtle.attack(1); // Using the attack method with attack number 1
