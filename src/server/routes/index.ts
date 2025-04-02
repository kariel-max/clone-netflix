import { Router } from "express";
import fs from 'fs'

import { produtosControllers } from './../controllers';
import { usuariosControllers } from "../controllers/usuarios";
import { mainControlle } from "../controllers/main";

const router = Router();

router.get( "/", (_, res) => {
    res.render('../../../views/home/index')
}) 

router.post('/cadastro/singIn', usuariosControllers.singIn)
router.get('/cadastro/singIn', usuariosControllers.singIn)

router.post('/cadastro/singUpEmail', usuariosControllers.singUpEmail)
router.post('/cadastro/singUpSenha', usuariosControllers.singUpSenha)
router.post('/cadastro/singUp', usuariosControllers.autenticar)

router.post('/cadastro/paymentPick', usuariosControllers.payment)
router.post('/cadastro/planform', usuariosControllers.planform)




router.get('/main', mainControlle.main)





router.get('/produtos', produtosControllers.GetAll);
router.post('/produtos', produtosControllers.Create);
router.get('/produtos/:id', produtosControllers.GetById);
router.put('/produtos/:id', produtosControllers.UpdateById);
router.delete('/produtos/:id', produtosControllers.DeleteById);


export { router }