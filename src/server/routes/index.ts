import { Router } from "express";
import fs from 'fs'

import { produtosControllers } from './../controllers';

const router = Router();

router.get( "/", (_, res) => {
    res.render('../../../views/page/index')
}) 

router.get('/produtos', produtosControllers.GetAll);
router.post('/produtos', produtosControllers.Create);
router.get('/produtos/:id', produtosControllers.GetById);
router.put('/produtos/:id', produtosControllers.UpdateById);
router.delete('/produtos/:id', produtosControllers.DeleteById);

export { router }