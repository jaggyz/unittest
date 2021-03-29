const point = require('./point')

test('point should be 0 when price is 80.00', () => {
    const expected = 0;
    
    const actual = point(80.00);
    
    expect(actual).toBe(expected);
});

test('point should be 1 when price is 100.00', () => {
    const expected = 1;
    
    const actual = point(100.00);
    
    expect(actual).toBe(expected);
});

test('point should be 3 when price is 380.00', () => {
    const expected = 3;
    
    const actual = point(380.00);
    
    expect(actual).toBe(expected);
});