/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

// Game Object Constructor ============

function GameObject(gameObjectArgs) {
  this.createdAt = gameObjectArgs.createdAt;
  this.dimensions = gameObjectArgs.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

// Character Stats Constructor ============

function CharacterStats(characterStatsArgs) {
  GameObject.call(this, characterStatsArgs);
  this.healthPoints = characterStatsArgs.healthPoints;
  this.name = characterStatsArgs.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

// Humanoid Constructor ============

function Humanoid(humanoidArgs) {
  CharacterStats.call(this, humanoidArgs);
  this.team = humanoidArgs.team;
  this.weapons = humanoidArgs.weapons;
  this.language = humanoidArgs.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
};

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1
    },
    healthPoints: 5,
    name: "Bruce",
    team: "Mage Guild",
    weapons: ["Staff of Shamalama"],
    language: "Common Tongue"
  });
  
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2
    },
    healthPoints: 15,
    name: "Sir Mustachio",
    team: "The Round Table",
    weapons: ["Giant Sword", "Shield"],
    language: "Common Tongue"
  });
  
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4
    },
    healthPoints: 10,
    name: "Lilith",
    team: "Forest Kingdom",
    weapons: ["Bow", "Dagger"],
    language: "Elvish"
  });
  
  const darth = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 1,
      height: 10
    },
    healthPoints: 200,
    name: "Darth",
    team: "None",
    weapons: ["Lightsaber", "Stormtroopers"],
    language: "English",
    side: "Dark"
  });
  
  const yoda = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 1,
      height: -2
    },
    healthPoints: 1000,
    name: "Yoda",
    team: "Jedi",
    weapons: ["Wisdom"],
    language: "Yodish",
    side: "Not Dark"
  });
  
  // Testing MVP constructor functions ============
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


/* Game Object Constructor ============

function GameObject(gameObjectArgs) {
    this.createdAt = gameObjectArgs.createdAt;
    this.dimensions = gameObjectArgs.dimensions;
  }
  
  GameObject.prototype.destroy = function() {
    return `${this.name} was removed from the game.`;
  };

  */

  class GameObject {
      constructor(gameObjectArgs) {
        this.createdAt = gameObjectArgs.createdAt;
        this.dimensions = gameObjectArgs.dimensions;
      }
      destroy() {
          return `${this.name} was removed from the game.`;
      }
  }