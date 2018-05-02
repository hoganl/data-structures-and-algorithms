'use strict';

const AnimalShelter = require('../fifo-animal-shelter');
const Animal = require('../animal');

describe('fifo-animal-shelter.js', () => {
  it('#animalConstructor', () => {
    const testAnimal = new Animal();

    expect(testAnimal.name).toEqual(undefined);
    expect(testAnimal.type).toEqual(undefined);
  });
  
  it('#shelterConstructor', () => {
    const testQueue = new AnimalShelter();
    
    expect(testQueue.shelter).toEqual([]);
  });

  it('#enqueue', () => {
    const cat = new Animal('bob', 'cat');
    const dog = new Animal('jerry', 'dog');
    const testQueue = new AnimalShelter();
    testQueue.enqueue(cat);
    testQueue.enqueue(dog);

    expect(testQueue.shelter[0].type).toEqual('cat');
    expect(testQueue.shelter[1].type).toEqual('dog');
  });

  it('#dequeue', () => {
    const cat = new Animal('bob', 'cat');
    const dog = new Animal('jerry', 'dog');
    const testQueue = new AnimalShelter();
    testQueue.enqueue(cat);
    testQueue.enqueue(dog);  

    expect(testQueue.dequeue().type).toEqual('cat');
  });
});
