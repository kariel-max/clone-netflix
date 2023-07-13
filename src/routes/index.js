const router = require('express').Router();
const Pageinicio = require('../controllers/pageinicial')

router.get('/', Pageinicio.pageinicio);

router.post('/cadastro', Pageinicio.cadastro)

module.exports = router;