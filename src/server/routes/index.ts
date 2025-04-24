import { Router } from "express";
import path from "path";

import { produtosControllers } from './../controllers';
import { usuariosControllers } from "../controllers/usuarios";
import { mainControlle } from "../controllers/main";

const router = Router();

router.get( "/", (_, res) => {
    res.sendFile(path.join(__dirname,'../../../index.html'))
}) 
router.get( "/cadastro", usuariosControllers.cadastro) 

router.post('/cadastro/singIn', usuariosControllers.singIn)

router.get('/cadastro/form', usuariosControllers.getForm)
router.post('/cadastro/singUp', usuariosControllers.singUp)

router.get('/cadastro/autenticar', usuariosControllers.autenticar)

router.post('/cadastro/paymentPick', usuariosControllers.payment)
router.post('/cadastro/planform', usuariosControllers.planform)




router.get('/main', mainControlle.main)





router.get('/produtos', produtosControllers.GetAll);
router.post('/produtos', produtosControllers.Create);
router.get('/produtos/:id', produtosControllers.GetById);
router.put('/produtos/:id', produtosControllers.UpdateById);
router.delete('/produtos/:id', produtosControllers.DeleteById);


export { router }