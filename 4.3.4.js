/* Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. 
Реализуйте его на прототипах.

Определить иерархию электроприборов. 
Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает. */

function ElectricApp (name, power){
    this.voltage = '220 V'
    this.name = name
    this.power = power
    this.powerOn = false
}

ElectricApp.prototype.switchOn = function(){
    console.log(`${this.name} включен в розетку`)
    this.powerOn = true;
}
ElectricApp.prototype.getPower = function(){
    if (this.powerOn === false) {
        this.activePower = 0}
    else {this.activePower = this.power}
    return this.activePower
}

function LightApp(name, power, lampType){
    this.name = name
    this.power = power
    this.lampType = lampType
}
function ComputerApp(name, power, compType){
    this.name = name
    this.power = power
    this.compType = compType
}
LightApp.prototype = new ElectricApp()
ComputerApp.prototype = new ElectricApp()

const lamp = new LightApp("Лампа", 20, "Диодная")
const computer = new ComputerApp("Компьютер", 300, "Ноутбук")
console.log(lamp)
console.log(computer)
console.log(lamp.getPower() + computer.getPower())
lamp.switchOn()
console.log(lamp.getPower() + computer.getPower())
computer.switchOn()
console.log(lamp.getPower() + computer.getPower())
