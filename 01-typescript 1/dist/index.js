"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const suma_1 = __importDefault(require("./helpers/suma"));
const num1 = 3;
const num2 = 4;
const resultado = (0, suma_1.default)(num1, num2);
console.log(resultado);
