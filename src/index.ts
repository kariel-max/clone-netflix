import { server } from "./server/Server";
import sequelize from "./server/database/Sequelize/sequelize";

server.listen( process.env.PORT, ()=> {
    console.log(' foi conectado!!!');
});

(async ()=> {
    try {
        await sequelize.sync({alter: true}); // use 'alter: true' em prodution use force: true para a manutenção
        console.log('Banco de dados sincronizado!');
    } catch (error) {
        console.error('erro ao sincronizar banco:', error);
    }
})();