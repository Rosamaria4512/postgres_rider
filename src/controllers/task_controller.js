import {tasks} from '../models/task.js';

export const crearTask = async (req,res) => {
    
    try{
        const {name,done,proyectId} = req.body
        // const {id} =res.params
  
        const newtask= await tasks.create({
            name,
            done,
            proyectId
        })
        res.status(200).json({menssage:'creacion de tareas exitosas',newtask:{
            id:newtask.id,
            name:newtask.name
        }})

    }catch(error){
        return res.status(500).json({message:error.message})
       
    }
}

export const getTask = async (req,res)=>{
    try{
        const task = await tasks.findAll()
        res.json(task)

    }catch(error){
        return res.status(500).json({message:error.message})
}
}

export const deletetask = async (req,res)=>{
    try{
        const {id}=req.params;
        await tasks.destroy({
            where:{
                id,
            }
        })
        res.status(200).json({message:'proyecto eliminado correctamente',id})
    }catch(error){
        return res.status(500).json({message:error.menssage})
    }
}

export const updateTask = async (req,res)=>{
    try{
        const {id}=req.params;
        const{name,done}=req.body
        const task =await tasks.findByPk(id);
        task.name=name;
        task.done=done;
      
        await task.save();
        res.status(200).json({message:'se ha actualizado el proyecto correctamente',data:task});
    }catch(error){
        return res.status(500).json({message:error.menssage})
    }
}

