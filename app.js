"use strict";
//Задание 1.
//пример 1
//let a = 1, b = 1, c, d; c = ++a;
//alert(c); // ответ: 2 
/* с=2, тк к а=1 применяется префиксный инкремент, который увеличил а еще на 1, затем полученное значение присвоили с*/
//пример 2
//d = b++;
//alert(d); //ответ: 1
/* d=1, тк к b применили постфиксный инкремент, сначала d присвоили b, полсе этого b увеличили на 1*/
//пример 3
//c = 2 + ++a;
//alert(c);
//тк a=2(в примере 1 а=2), применив к а префиксный инкремент еще раз ,получилось а=3, прибавили 2, в итоге c=5.

//пример 4 
//d = 2 + b++;
//alert(d); //ответ: 4 , тк ранее к b применили постфиксный инкремент и при повторном прохождении b=2, 
//в данном примере к b опять применили инкремент, который сработает при следующем прохождении.

//alert(a); //3 в примере 3 а увеличили сразу на 1(префиксный инкремент)
//alert(b); //3 вот оно, следующие прохождение ,сработал постфиксный инкремент, увеличив b на единицу
//Задание 2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло (описать последовательность действий). 
//a = 2;
//let x = 1 + (a *= 2);
/*1.объявили переменную а=2,
2. выполняются действия в скобках (высший приоритет) а=а*2 , получилось а=4.
3. х=1+4, х=5*/

/*Задание 3. Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение;
- * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;*/
let a = +prompt("Введите целое число, ");
let b = +prompt("Введите целое число, ");
let result;
function arithmetic_operations(a, b) {
    if (a > 0 & b > 0) {
        result = a - b;
    }
    else if (a < 0 & b < 0) {
        result = a * b;
    }
    else if (a * b < 0) {
        result = a * b;
    }
    alert(result);
}
arithmetic_operations(a, b);

/* Задание 4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return.*/
/**
 * функции, выполняющие арифметические операции
 */
let c, d;
function summ_numbers(c, d) {
    return (c + d);
}
result = summ_numbers(1, 56)
alert(result);
function difference_numbers(c, d) {
    return (c - d);
}
result = difference_numbers(4, 6);
alert(result);
function multiplication_numbers(c, d) {
    return (c * d);
}
result = multiplication_numbers(4, 6);
alert(result);
function division_numbers(c, d) {
    return (c / d);
}
result = division_numbers(9, -8);
alert(result);

/*5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.*/
let arg1, arg2;
//result=0;
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case summ_numbers:
            result = summ_numbers(arg1, arg2);
            alert(result);
            return (result);
            break;
        case difference_numbers:
            result = difference_numbers(arg1, arg2);
            alert(result);
            return (result);
            break;
        case multiplication_numbers:
            result = multiplication_numbers(arg1, arg2);
            alert(result);
            return (result);
            break;
        case division_numbers:
            result=difference_numbers(arg1, arg2);
            alert(result);
            return (result);
            break;
    }
    alert(result)
}
mathOperation(4, 2, difference_numbers);