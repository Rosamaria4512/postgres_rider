import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    await sequelize.sync({force:false});
    app.listen(3000);
    console.log("servidor en linea", 3000);
  } catch (error) {}
}
main();
