"use strict";
// Assign type
const a = 23;
// Arrays
const arr = [23, 13, 9];
// Tuple
const tuple = ['Hello', 'World'];
// Enum
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
var Keyboard;
(function (Keyboard) {
    Keyboard[Keyboard["UP"] = 0] = "UP";
    Keyboard[Keyboard["DOWN"] = 1] = "DOWN";
    Keyboard[Keyboard["LEFT"] = 2] = "LEFT";
    Keyboard[Keyboard["RIGHT"] = 3] = "RIGHT";
})(Keyboard || (Keyboard = {}));
function greeting(id, userName) {
    return `Hello ${id}) ${userName}`;
}
const johnsGreeting = greeting(23, 'John');
// console.log('johnsGreeting', johnsGreeting);
