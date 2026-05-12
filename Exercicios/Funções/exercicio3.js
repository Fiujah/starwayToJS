const tempCelcius = 16;

function converterCelcuiusEmFarenheit(celcius) {
    const tempFarenheith = (9/5) * (celcius) + 32
    return tempFarenheith
};

console.log(`A temperatura correspondente em Farenheit é de ${converterCelcuiusEmFarenheit(tempCelcius)}ºF`);
