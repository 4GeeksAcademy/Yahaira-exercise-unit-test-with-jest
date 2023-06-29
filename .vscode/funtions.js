let oneEuroIs = {
    "JPY": 127.9, // Yen
    "USD": 1.2, //  Dollar
    "GBP": 0.8, //  Pound
}


const fromEuroToDollar = function(valueInEuro){
    
    let valueInDollar = valueInEuro * 1.2;
   
    return valueInDollar;
   }
   const fromDollarToYen = function(valueInDollar){
    
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;
   }

   const fromYenToPound = function(valueInYenes){
 
    let valueInPound = valueInYenes * 0.8;
 
    return valueInPound;
   }


// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound };





