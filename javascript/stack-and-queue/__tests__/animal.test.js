'use strict';

const { AnimalShelter } = require('../index');

describe('AnimalShelter', () => {

  test('Add Animal to queue', () => {
    let AnimalShelter = new AnimalShelter;

    AnimalShelter.enqueue({name: 'Doge', species: 'Dog'});
    expect(AnimalShelter.peek()).toEuqal({name: 'Doge', species: 'Dog'});
  });

  test('Add Animal with no name returns null', () => {
    let AnimalShelter = new AnimalShelter;

    AnimalShelter.enqueue({species: 'Dog'});
    expect(AnimalShelter.peek()).toEuqal(null);
  });

  test('test dequeue', () => {
    let AnimalShelter = new AnimalShelter;

    AnimalShelter.enqueue({name: 'Doge', species: 'dog'});
    AnimalShelter.enqueue({name: 'Peak', species: 'cat'});

    expect(AnimalShelter.dequeue('dog')).toEuqal({name: 'Doge', species: 'dog'});
    expect(AnimalShelter.dequeue('cat')).toEuqal({name: 'Peak', species: 'cat'});
    expect(AnimalShelter.dequeue('fish')).toEuqal(null);
  });
});

