import {  Model, DataTypes } from 'sequelize';
import sequelize from '../Sequelize/sequelize';

export class IUsuario extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public senha!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

IUsuario.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName:'IUsuario',
    tableName: 'users',
    timestamps: true,
});

export default IUsuario;