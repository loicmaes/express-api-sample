import { Sequelize, DataTypes } from "sequelize"

const orm = new Sequelize(process.env.DB_BASE || `base`, // Database base name
    process.env.DB_USERNAME || `root`, // Database username
    process.env.DB_PASSWORD || ``, // Database password
    {
        host: process.env.DB_HOST || `localhost`, // Database host
        port: parseInt(process.env.DB_PORT || `3306`), // Database port
        dialect: 'mariadb', // Database dialect
        dialectOptions: {
            timezone: 'Etc/GMT-2' // Time zone
        },
        logging: false // Logging?
})

export const Sample = require(`./models/Sample`)(orm, DataTypes)

export function initDatabase(): void {
    orm.sync({
        force: false
    }).then(_ => {
        console.log(`LOG: Database synchronized.`)
    })
}
