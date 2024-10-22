const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greet user', name => {
    console.log(`Hello, ${name}`);
});

myEmitter.emit('greet user', 'John');

myEmitter.removeAllListeners(['greet user']);

myEmitter.on('error', err => {
    console.log(err.message);
});

myEmitter.emit('greet user', 'John');
