import { Router } from "express";

import { mainControlle } from "../controllers/main";

const router = Router();

router.get( "/", (_, res) => {
    res.render('../../../views/home/index')
}) 
router.get('/main', mainControlle.main)

export { router }