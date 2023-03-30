import {sequelize} from "../database/database.js";
import { DataTypes } from "sequelize";
export const tasks = sequelize.define('task', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
    },
    done:{
        type: DataTypes.BOOLEAN,
    }
})