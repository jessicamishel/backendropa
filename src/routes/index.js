const {Router} = require('express')
const { getTemperatura, getTemperaturaByid, postCreateTemperatura, updateTemperatura, deleteTemperatura } = require('../controllers/controllers')
const router = Router()

router.get("/temperatura",getTemperatura)
router.get("/temperatura/:id",getTemperaturaByid)
router.post("/temperatura",postCreateTemperatura)
router.put("/temperatura/:id",updateTemperatura)
router.delete("/temperatura/:id",deleteTemperatura)
module.exports=router