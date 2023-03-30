import { Router } from "express";
import {crearProyecto,getproyecto,deleteproyect,updateproyect} from "../controllers/proyecto_controller.js"
const router=Router()

router.post('/proyecto',crearProyecto)
router.get('/proyecto',getproyecto)
router.delete('/proyecto/:id',deleteproyect)
router.put('/proyecto/:id',updateproyect)
export default router