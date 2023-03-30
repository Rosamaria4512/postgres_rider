import Express from "express";
import proyectrouter from "./router/proyect_router.js"
import taskrouter from "./router/task_router.js"
const app = Express();
app.use(Express.json())
app.use(proyectrouter)
app.use(taskrouter)
export default app;