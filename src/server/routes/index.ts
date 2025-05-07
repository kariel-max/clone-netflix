import { Router } from "express";

import { usuariosControllers } from "../controllers/usuarios";
import { mainControlle } from "../controllers/main";

const router = Router();

router.get( "/cadastro", usuariosControllers.cadastro) 

router.post('/cadastro/singIn', usuariosControllers.singIn)

router.get('/cadastro/form', usuariosControllers.getForm)
router.post('/cadastro/singUp', usuariosControllers.singUp)

router.get('/cadastro/autenticar', usuariosControllers.autenticar)

router.get('/cadastro/paymentPick', usuariosControllers.payment)
router.get('/cadastro/planform', usuariosControllers.planform)


router.get('/main', mainControlle.main)


export { router }