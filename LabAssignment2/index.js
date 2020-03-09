"use strict";
exports.__esModule = true;
var Greeter = /** @class */ (function () {
    function Greeter(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Greeter.prototype.showGreeting = function () {
        var row2 = window.document.getElementById("r1c2");
        console.log('row2', row2, 'document', document);
    };
    Greeter.prototype.resetGreeting = function () {
        var row2 = document.getElementById("r1c2");
        row2.innerHTML = 'r1c2';
    };
    return Greeter;
}());
exports.Greeter = Greeter;
// window.onload = () => {
var greeter = new Greeter('chris', 'everly');
// }  
