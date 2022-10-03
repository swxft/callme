const ph = require('./index.js')
console.log(ph.phoneFormatter)

test('returns string in correct format when given 10 digit string ', () => {
    expect(ph.phoneFormatter('2345678899')).toBe(('(234)567-8899'))
})

test('returns string in correct format when given 10 digit number ', () => {
    expect(ph.phoneFormatter(2345678899)).toBe(('(234)567-8899'))
})

test('returns an error if anyting other than 10 digits is supplied ', () => {
    expect(ph.phoneFormatter(21)).toBe(('error: input should be 10 numbers'))
    expect(ph.phoneFormatter(11122233334)).toBe(('error: input should be 10 numbers'))
    expect(ph.phoneFormatter('hello')).toBe(('error: input should be 10 numbers'))
})

