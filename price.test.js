const toThaiBath = require('./toThaiBath');
const exchangeRate = require('./exchangeRate');

jest.mock('./exchangeRate')

test('convert 42.95 USD to THB should be 1319.42', () => {
    
    const expectedResult = 1319.42;
    const USDPrice = 42.95;
    exchangeRate.mockReturnValueOnce(30.72);

    const actual = toThaiBath(USDPrice);

    expect(actual).toBe(expectedResult);
});
