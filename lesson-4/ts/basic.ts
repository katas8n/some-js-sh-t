// Assign type
const a: number = 23;

// Arrays
const arr: number[] = [23, 13, 9];

// Tuple
const tuple: [string, string] = ['Hello', 'World'];

// Enum
enum Color {
    RED,
    GREEN,
    BLUE
}

enum Keyboard {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

function greeting(id: number, userName?: string): string {
    return `Hello ${id}) ${userName}`;
}

const johnsGreeting = greeting(23, 'John');
// console.log('johnsGreeting', johnsGreeting);
