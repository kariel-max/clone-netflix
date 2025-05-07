import {Sequelize} from "sequelize"

const sequelize = new Sequelize({
    database: process.env.PG_DB || 'netflix',
    username: process.env.PG_USER || 'postgres',
    password: String(process.env.PG_PASSWORD || 'postgres'),
    host: process.env.PG_HOST || 'localhost',
    port: Number(process.env.PG_PORT || 5432),
    dialect: 'postgres',
    ssl: process.env.NODE_ENV === 'production',
    dialectOptions: process.env.NODE_ENV === 'production' ? {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    } : {},
    logging: false
})
export default (sequelize)