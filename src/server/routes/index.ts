import { Router } from "express";

import { produtosControllers } from './../controllers';

const router = Router();

router.get( "/", (_, res) => {
   return res.render('page/index')
}) 

router.get('/produtos', produtosControllers.GetAll);
router.post('/produtos', produtosControllers.Create);
router.get('/produtos/:id', produtosControllers.GetById);
router.put('/produtos/:id', produtosControllers.UpdateById);
router.delete('/produtos/:id', produtosControllers.DeleteById);

export { router }