"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcome = void 0;
function welcome(req, res) {
    return res.json({ message: "welcome to Typescript Express Application" });
}
exports.welcome = welcome;
//module.exports = welcome;
