/*Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.*/

function checkProperty(object, str){
    for (let key in object){
        if (key===str) {
            return true};}
    return false;
        };

let check = checkProperty({"fact1": 1, "fact2":2, "fact3": 3}, "fact2")
console.log(check)