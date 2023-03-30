import {sequelize} from "../database/database.js";
import { DataTypes } from "sequelize"; // Import the built-in data types
import { tasks } from "./task.js";
export const proyecto = sequelize.define('proyecto', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
    },

    priority:{
        type: DataTypes.INTEGER,
    },
    description:{
        type: DataTypes.STRING,
    },
    estado:{
        type: DataTypes.BOOLEAN,
    }
    
},
{
    timestamps:false
}
);

proyecto.hasMany(tasks,{
    foreingKey: 'proyecid',
    sourceKey: 'id'
})

tasks.belongsTo(proyecto,{
    foreingkey: 'proyecid',
    targetId:'id'
})