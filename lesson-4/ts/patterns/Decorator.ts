class Coffee {
    getCost() {
        return 13;
    }
}

class MilkDecorator {
    constructor(private coffee: Coffee) {}

    getCost() {
        return this.coffee.getCost() + 9;
    }
}

class SugarDecorator {
    constructor(private coffee: Coffee) {}

    getCost() {
        return this.coffee.getCost() + 1;
    }
}

let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);

console.log(coffee);
