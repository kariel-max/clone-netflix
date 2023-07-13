const User = require('../models/User')
const intance = require('../intances/postgres')

const pageinicio = async (req, res, next) => {
    res.render('page/index')    
}
exports.pageinicio = pageinicio;

const cadastro = async (req, res, next)=> {
    res.render('page/pageLogin')

    const email = req.body.Email
    console.log();
    await intance.sync();

    var erros = []

    if(!req.body.Email || typeof req.body.Email == undefined || req.body.Email == null) {
        erros.push({texto: "Nome inválido"})
    }

        if(email !== "") {   
            const checkUser = await User.findOne({where: {email}})
            if(checkUser !== null) {

            } else {
                console.log("campo vazio!!!");
            }
            console.log();
        } else {
            console.log("não encontrado!!!");
        }
        

}

exports.cadastro = cadastro