import { Router } from "express";
import {crearTask,getTask,deletetask,updateTask} from"../controllers/task_controller.js"
const router=Router()

router.post('/task',crearTask)
router.get('/task',getTask)
router.delete('/task/:id',deletetask)
router.put('/task/:id',updateTask)
export default router