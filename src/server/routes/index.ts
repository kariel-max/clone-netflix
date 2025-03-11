import { Router } from "express";
import fs from 'fs'

import { produtosControllers } from './../controllers';
import { usuariosControllers } from "../controllers/usuarios";

const router = Router();

router.get( "/", (_, res) => {
    res.render('../../../views/home/index')
}) 

router.post('/cadastro/singIn', usuariosControllers.singIn)
router.post('/cadastro/singUp', usuariosControllers.singUp)
router.get('/cadastro/singUp', usuariosControllers.areaCriaçao)

router.get('/produtos', produtosControllers.GetAll);
router.post('/produtos', produtosControllers.Create);
router.get('/produtos/:id', produtosControllers.GetById);
router.put('/produtos/:id', produtosControllers.UpdateById);
router.delete('/produtos/:id', produtosControllers.DeleteById);


export { router }