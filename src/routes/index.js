const {Router} = require('express')
const { getTemperatura, getTemperaturaByid, postCreateTemperatura, updateTemperatura, deleteTemperatura, postUsuario } = require('../controllers/controllers')
const router = Router()

router.get("/temperatura",getTemperatura)
router.get("/temperatura/:id",getTemperaturaByid)
router.post("/temperatura",postCreateTemperatura)
router.put("/temperatura/:id",updateTemperatura)
router.delete("/temperatura/:id",deleteTemperatura)
router.post("/usuario",postUsuario)
module.exports=router