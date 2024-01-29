"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const brasilapi = axios_1.default.create({
    baseURL: "http://brasilapi.com.br/api",
});
brasilapi.get("/cep/v2/89120000").then((data) => {
    console.log(data.data);
});
brasilapi.get("/ddd/v1/47").then((data) => {
    console.log(data.data);
});
brasilapi.get("/feriados/v1/2024").then((data) => {
    console.log(data.data);
});
