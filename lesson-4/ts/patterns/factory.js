"use strict";
class Choke {
    operation() {
        return 'Choke';
    }
}
class LimpBizkit {
    operation() {
        return 'Limp Bizkit';
    }
}
class Korn {
    operation() {
        return 'Korn';
    }
}
class Factory {
    static createProduct(type) {
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
