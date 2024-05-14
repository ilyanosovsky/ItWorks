"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decipher = exports.encryptStr = void 0;
var cipher = function (salt) {
    var textToChars = function (text) { return text.split('').map(function (c) { return c.charCodeAt(0); }); };
    var byteHex = function (n) { return ('0' + n.toString(16)).substr(-2); };
    var applySaltToChar = function (code) { return textToChars(salt).reduce(function (a, b) { return a ^ b; }, code); };
    return function (text) {
        return text
            .split('')
            .map(textToChars)
            .map(function (a) { return a[0]; })
            .map(applySaltToChar)
            .map(byteHex)
            .join('');
    };
};
var decipher = function (salt) {
    var textToChars = function (text) { return text.split('').map(function (c) { return c.charCodeAt(0); }); };
    var applySaltToChar = function (code) { return textToChars(salt).reduce(function (a, b) { return a ^ b; }, code); };
    return function (encoded) {
        return encoded
            .match(/.{1,2}/g)
            .map(function (hex) { return parseInt(hex, 16); })
            .map(applySaltToChar)
            .map(function (charCode) { return String.fromCharCode(charCode); })
            .join('');
    };
};
exports.decipher = decipher;
var encryptStr = function (text) { return cipher('SECRET')(text); };
exports.encryptStr = encryptStr;
