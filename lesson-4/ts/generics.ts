function transformArg<T>(arg: T): string {
    return arg + '!';
}

transformArg<number>(23);

class Box<T> {
    content!: T;

    constructor(content: T) {}
}

const box = new Box<string>('Hello!');
