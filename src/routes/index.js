const {Router} = require('express')
const { getRopa, getRopaByid, postCreateRopa, deleteRopa, updateRopa, getRopaByDate, getRopaByType, getCliente,
    getClienteByid,
    postCreateCliente,
    deleteCliente,
    updateCliente, 
    getVenta,
    postCreateVenta} = require('../controllers/controllers')
const{postAutenticar} = require('../indexLogin')
const router = Router()

router.get("/ropa",getRopa)
router.get("/ropa/:id",getRopaByid)
router.post("/ropa",postCreateRopa)
router.delete("/ropa/:id",deleteRopa)
router.put("/ropa/:id",updateRopa)
router.get("/ropa/fecha/:fecha",getRopaByDate)
router.get("/ropa/tipo/:tipo",getRopaByType)

//-----------CLIENTE------------
router.get("/cliente",getCliente)
router.get("/cliente/:id",getClienteByid)
router.post("/cliente",postCreateCliente)
router.delete("/cliente/:id",deleteCliente)
router.put("/cliente/:id",updateCliente)
router.post("/autenticar",postAutenticar)

//venta
router.get("/venta", getVenta)
router.post("/venta",postCreateVenta)

module.exports = router;
