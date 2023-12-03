/* Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. 
Реализуйте его на прототипах.

Определить иерархию электроприборов. 
Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает. */

class ElectricApp {
    constructor(name, power) {
    this.voltage = '220 V'
    this.name = name
    this.power = power
    this.powerOn = false
    }

    switchOn() {
    console.log(`${this.name} включен в розетку`)
    this.powerOn = true;
    }
    
    getPower() {
    return this.powerOn ? this.power : 0;
    }
}

class LightApp extends ElectricApp { 
    constructor(lampType, name, power) {
        super(name, power)
        this.lampType = lampType
    }
}

class ComputerApp extends ElectricApp {
    constructor(compType, name, power) {
        super(name, power);
        this.compType = compType;
    }
}

const lamp = new LightApp("Диодная", "Лампа", 20)
const computer = new ComputerApp("Ноутбук", "Компьютер", 300)
console.log(lamp)
console.log(computer)
console.log(lamp.getPower() + computer.getPower())
lamp.switchOn()
console.log(lamp.getPower() + computer.getPower())
computer.switchOn()
console.log(lamp.getPower() + computer.getPower())
