interface IStrategy {
    execute(a: number, b: number): number;
}

class AddStrategy implements IStrategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}
class SubtractStrategy implements IStrategy {
    execute(a: number, b: number): number {
        return a - b;
    }
}

class Calculator {
    constructor(private strategy: IStrategy) {}

    setStrategy(strategy: IStrategy) {
        this.strategy = strategy;
    }

    calculate(a: number, b: number): number {
        return this.strategy.execute(a, b);
    }
}
