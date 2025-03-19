import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    database: process.env.PG_DB,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    dialect: "postgres",

})

export default sequelize;