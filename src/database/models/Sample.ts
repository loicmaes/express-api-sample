import { Sequelize } from 'sequelize'

module.exports = (orm: Sequelize, types: any) => {
    return orm.define(`sample`, {
        id: {
            type: types.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: true
    })
}
