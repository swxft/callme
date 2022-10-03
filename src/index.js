"use strict";
exports.__esModule = true;
exports.phoneFormatter = void 0;
var phoneFormatter = function (digits) {
    var stringInput = digits.toString();
    if (stringInput.length !== 10) {
        return 'error: input should be 10 numbers';
    }
    var formattedArr = Array.from(stringInput);
    formattedArr.splice(0, 0, '(');
    formattedArr.splice(4, 0, ')');
    formattedArr.splice(-4, 0, '-');
    return formattedArr.join('');
};
exports.phoneFormatter = phoneFormatter;
console.log(phoneFormatter(4155448375));
