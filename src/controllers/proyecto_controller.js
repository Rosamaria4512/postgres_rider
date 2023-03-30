import {proyecto} from '../models/proyecto.js';

export const crearProyecto = async (req,res)=>{
    
    try{
        const {name,priority,description,estado}=req.body
        // const {id} =res.params
        const newproyect = await proyecto.create({
            name,
            description,
            priority,
            estado,
         
        })
        res.status(200).json({menssage:'recurso creado con extito',newproyect:{
            id:newproyect.id,
            name:newproyect.name
        }})

    }catch(error){
        return res.status(500).json({message:error.message})
       
    }
}

export const getproyecto = async (req,res)=>{
    try{
        const proyect = await proyecto.findAll ()
        res.json(proyect)

    }catch(error){
        return res.status(500).json({message:error.message})
}
}

export const deleteproyect = async (req,res)=>{
    try{
        const {id}=req.params;
        await proyecto.destroy({
            where:{
                id,
            }
        })
        res.status(200).json({message:'proyecto eliminado correctamente',id})
    }catch(error){
        return res.status(500).json({message:error.menssage})
    }
}

export const updateproyect = async (req,res)=>{
    try{
        const {id}=req.params;
        const{name,priority,description,estado}=req.body
        const proyect=await proyecto.findByPk(id);
        proyect.name=name;
        proyect.priority=priority;
        proyect.description=description;
        proyect.estado=estado;
        await proyect.save();
        res.status(200).json({message:'se ha actualizado el proyecto correctamente',data:proyect});
    }catch(error){
        return res.status(500).json({message:error.menssage})
    }
}

