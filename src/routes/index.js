const {Router} = require('express')
const { getTemperatura, getTemperaturaByid, postCreateTemperatura, updateTemperatura, deleteTemperatura, postUsuario, getTemperaturaAltas, getTemperaturaByDate } = require('../controllers/controllers')
const router = Router()

router.get("/temperatura",getTemperatura)
router.get("/temperatura/:id",getTemperaturaByid)
router.post("/temperatura",postCreateTemperatura)
router.put("/temperatura/:id",updateTemperatura)
router.delete("/temperatura/:id",deleteTemperatura)
router.post("/usuario",postUsuario)
router.get("/temperaturass",getTemperaturaAltas)
router.get("/temperaturass/:date",getTemperaturaByDate)
module.exports=router