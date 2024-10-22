"use strict";
class Observer {
    update(data) {
        console.log(data);
    }
}
class Subject {
    constructor() {
        this.observers = [];
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    notifyAll(news) {
        this.observers.forEach(observer => observer.update(news));
    }
}
const subj = new Subject();
const obs1 = new Observer();
const obs2 = new Observer();
subj.addObserver(obs1);
subj.addObserver(obs2);
subj.notifyAll('News!');
