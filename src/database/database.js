import Sequelize from 'sequelize';
export const sequelize = new Sequelize('rosa', 'postgres', 'Rosa4512', {
    host: 'localhost',
    dialect: 'postgres'
  });