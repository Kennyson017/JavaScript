const Soma = (num1, num2) => num1 + num2; 
const Subtrai = (num1, num2) => num1 - num2;
const Multiplica = (num1, num2) => num1 * num2;
const Divide = (num1, num2) => num1 / num2;

const Resultado = (num1, num2) => {
    console.log(`Soma entre ${num1} e ${num2} é`, Soma(num1, num2));
    console.log(`Subtração entre ${num1} e ${num2} é`, Subtrai(num1, num2));
    console.log(`Multiplicação entre ${num1} e ${num2} é`, Multiplica(num1, num2));
    console.log(`Divisão entre ${num1} e ${num2} é`, Divide(num1, num2));
}

Resultado(20,3);

