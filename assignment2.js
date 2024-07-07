// 1. Write code to display from 1 to 100 but just even numbers.
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
function calculate(num1, num2, operation) {
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                result = 'Error: Division by zero';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = 'Invalid operation';
    }
    return result;
}


console.log(calculate(10, 5, 'add')); 
console.log(calculate(10, 5, 'subtract')); 
console.log(calculate(10, 5, 'multiply')); 
console.log(calculate(10, 5, 'divide')); 
console.log(calculate(10, 0, 'divide'));

/*3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

if 500000 >= salary > 0 then 0% tax on the entire salary.
If 1000000 >= salary > 500000 then 10% tax on the entire salary.
If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
If the salary > 1500000 then 30% tax on the entire salary.*/
function findTax(salary) {
    let taxRate;
    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.1;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.2;
            break;
        case (salary > 1500000):
            taxRate = 0.3;
            break;
        default:
            return 'Invalid salary';
    }
    return salary * taxRate;
}

console.log(findTax(400000)); 
console.log(findTax(800000));
console.log(findTax(1200000)); 
console.log(findTax(2000000)); 

//4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.
function sumOfProducts(n1, n2) {
    const str1 = n1.toString().split('').reverse().join('');
    const str2 = n2.toString().split('').reverse().join('');
    const length = Math.max(str1.length, str2.length);
    let sum = 0;

    for (let i = 0; i < length; i++) {
        const digit1 = parseInt(str1[i] || '0', 10);
        const digit2 = parseInt(str2[i] || '0', 10);
        sum += digit1 * digit2;
    }

    return sum;
}


console.log(sumOfProducts(6, 34));
console.log(sumOfProducts(12, 34));
console.log(sumOfProducts(123, 456)); 

