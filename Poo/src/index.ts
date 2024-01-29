import { AppDataSource } from "./data-source";
import express, { Request, Response, json } from "express";
import { User } from "./model/User";
import { UserController} from "./controller/UserController";
import { UserDTO } from "./dto/UserDTO";

const server = express();
// const usercontroller = new UserController()
server.use(json());

server.get("", (request: Request, response: Response) => {
  return response.send("O servidor está funcionando");
});

server.get("/users", async (request: Request, response: Response) => {
  const usercontroller = new UserController(); 
  return response.json(await usercontroller.getUsers);
});

server.post("/users", async (request: Request, response: Response) => {
  const usercontroller = new UserController()
  try{
    console.log(request.body);
    
  const newUser = await usercontroller.createUsers(
    new UserDTO(
    null,
    request.body.name,
    request.body.userName,
    request.body.birthDate,
    request.body.bio,
    request.body.avatarUrl,
    request.body.email
    )
    );
  return response.status(201).json(newUser);
    }catch(error){
      console.log(error.message);
      
    }
});

AppDataSource.initialize()
  .then(async () => {
    console.log("Banco de Dados inicializado");

    server.listen(3000, () => {
      console.log("Servidor escutando na porta 3000");
    });
  })
  .catch((error) => console.log(error));
