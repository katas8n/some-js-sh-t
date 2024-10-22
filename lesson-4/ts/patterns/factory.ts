interface Product {
    operation(): string;
}

class Choke implements Product {
    operation(): string {
        return 'Choke';
    }
}

class LimpBizkit implements Product {
    operation(): string {
        return 'Limp Bizkit';
    }
}

class Korn implements Product {
    operation(): string {
        return 'Korn';
    }
}

class Factory {
    public static createProduct(type: string) {
        switch (type) {
            case 'korn':
                return new Korn();

            case 'lb':
                return new LimpBizkit();

            case 'chk':
                return new Choke();

            default:
                console.log('Huck u');
        }
    }
}

const prod = Factory.createProduct('korn');

console.log(prod);
