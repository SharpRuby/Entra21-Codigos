import axios from "axios";

const brasilapi = axios.create({
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