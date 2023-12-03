/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в 
консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение. */

const person = {
    city: "Moscow",
    sex: "Male"
}

function ownProperty(object){
    for (let key in object){
        if (object.hasOwnProperty(key)) {
            console.log(object)
        }
    }
}
const student = Object.create(person)
student.ownCity = "Piter"
ownProperty(student)