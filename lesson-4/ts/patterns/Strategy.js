"use strict";
class AddStrategy {
    execute(a, b) {
        return a + b;
    }
}
class SubtractStrategy {
    execute(a, b) {
        return a - b;
    }
}
class Calculator {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    calculate(a, b) {
        return this.strategy.execute(a, b);
    }
}
