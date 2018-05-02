'use strict';

class AnimalShelter {
  constructor() {
    this.shelter = [];
  }

  enqueue(animal) {
    this.shelter.push(animal);
  }

  dequeue(pref) {
    if (!pref) {
      return this.shelter.shift();
    }

    for (let i = 0; i < this.shelter.length; i++) {
      if (pref === this.shelter[i].type) {
        return this.shelter.splice(i, 1);
      }
    }
    return null;
  }
}

module.exports = AnimalShelter;
