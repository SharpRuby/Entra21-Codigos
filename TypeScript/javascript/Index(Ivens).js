"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const brasilApi = axios_1.default.create({
    baseURL: "http://brasilapi.com.br/api",
});
brasilApi.get("/cep/v2/89087491").then((data) => {
    console.log(data.data);
});
