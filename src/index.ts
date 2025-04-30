import { server } from "./server/Server";
import sequelize from "./server/database/Sequelize/sequelize";

server.listen( process.env.PORT, ()=> {
    console.log(' foi conectado!!!');
});
