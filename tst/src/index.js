import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
<App />, document.getElementById('root'))


class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;

    }

    speak(){
        console.log('I am', this.name, 'and I am', this.age,'years old');
    }
}

const animal1 =new Animal('Simba', 3);
animal1.speak();

console.log(animal1);

class Lion extends Animal{
    constructor(name, age, furColour, speed){
        super(name, age);
        this.furColour = furColour;
        this.speed = speed;
    }

    roar(){
        console.log(
            'Rooar! i have', 
            this.furColour,
            'fur, and i can run', 
            this.speed, 
            'miles an hour!')
    }
}

const lion1 = new Lion('Mufass',20,'golden', 25);
lion1.speak();
lion1.roar();
console.log(lion1);