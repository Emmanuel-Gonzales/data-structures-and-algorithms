'use strict';

const validateBrackets = require('./index');

describe('bracket checker', () => {
  it('Brackets', () => {
    expect(validateBrackets('{}')).toEqual(true);
    expect(validateBrackets('{}(){}')).toEqual(true);
    expect(validateBrackets('()[[Extra Characters]]')).toEqual(true);
    expect(validateBrackets('(){}[[]]')).toEqual(true);
    expect(validateBrackets('{}{Code}[Fellows](())')).toEqual(true);
    expect(validateBrackets('[({}]')).toEqual(false);
    expect(validateBrackets('(](')).toEqual(false);
    expect(validateBrackets('{(})')).toEqual(false);
  });
});
