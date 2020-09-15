const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should creates a valid query string when a object is provided', () => {
    const obj = {
      name: 'Silvio',
      profession: 'dev',
    };
    expect(queryString(obj)).toBe('name=Silvio&profession=dev');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Silvio',
      profession: 'dev',
      abilities: ['JS', 'TDD'],
    };
    expect(queryString(obj)).toBe(
      'name=Silvio&profession=dev&abilities=JS,TDD',
    );
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Silvio',
      profession: 'dev',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };
    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Silvio&abilities=JS,TDD';
    expect(parse(qs)).toEqual({
      name: 'Silvio',
      abilities: ['JS', 'TDD'],
    });
  });
});
