class Singleton {
    private static instance: Singleton;

    constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

const sample1 = Singleton.getInstance();
const sample2 = Singleton.getInstance();

console.log(sample1 === sample2);
