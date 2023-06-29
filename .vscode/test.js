
// Euros dolares
test("1 euro es igual a 1.2 dolares", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2); // 4.2 dolares
})


test("1 dolar es igual 127.9 yenes ", function(){
    const { fromDollarToYen} = require('./app.js')
    expect(fromDollarToYen(4.2)).toBeCloseTo(537.18); 
})


test("1 yen es igual 0.8 libras", function(){
    const {fromYenToPound  } = require('./app.js')
    expect(fromYenToPound (537.18)).toBeCloseTo(429.744); 
})
