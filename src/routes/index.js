const {Router} = require('express')
const { getRopa, getRopaByid, postCreateRopa, deleteRopa, updateRopa } = require('../controllers/controllers')
const router = Router()

router.get("/ropa",getRopa)
router.get("/ropa/:id",getRopaByid)
router.post("/ropa",postCreateRopa)
router.delete("/ropa/:id",deleteRopa)
router.put("/ropa/:id",updateRopa)
module.exports = router;
