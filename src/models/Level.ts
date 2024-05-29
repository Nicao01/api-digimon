import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/Connection';

// Define o model Level com suas propriedades
class Level extends Model {
  public id!: number;
  public title!: string;
}

// Inicia o model Level
Level.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: new DataTypes.STRING(128),
    allowNull: false,
    unique: true,
  },
}, {
  sequelize,
  tableName: 'level',
  timestamps: false,
});

export default Level;
