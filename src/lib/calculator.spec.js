const { sum } = require('./calculator');

it('should sum 2 and 2 and the result must be 4', () => {
    expect(sum(2, 2)).toBe(4);
});

it('should sum 2 and 2 even if one of then is a string and the result must br 4', () => {
    expect(sum('2', 2)).toBe(4);
});
