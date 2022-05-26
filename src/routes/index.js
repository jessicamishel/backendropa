const {Router} = require('express')
const { getContactos, getContactoByid, postCreateContactos, deleteContacto, putUpdateContacto } = require('../controllers/controllers')
const router = Router()

router.get("/contactos",getContactos)
router.get("/contactos/:id",getContactoByid)
router.post("/contactos",postCreateContactos)
router.put("/contactos",putUpdateContacto)
router.delete("/contactos/:id",deleteContacto)
module.exports=router