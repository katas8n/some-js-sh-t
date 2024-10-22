"use strict";
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
const sample1 = Singleton.getInstance();
const sample2 = Singleton.getInstance();
console.log(sample1 === sample2);
