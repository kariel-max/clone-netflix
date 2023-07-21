import { server } from "./server/Server";


server.listen( process.env.PORT, ()=> {
    console.log('O servidor foi conectado!!!');
})