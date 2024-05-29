import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/Connection';
import Level from './Level';

// Define o model Digimon com suas propriedades e associações
class Digimon extends Model {
  public id!: number;
  public name!: string;
  public img!: string;
  public level!: number;
}

// Inicia o model Digimon
Digimon.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  img: {
    type: new DataTypes.STRING(256),
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'level',
      key: 'id',
    },
  },
}, {
  sequelize,
  tableName: 'digimon',
  timestamps: false,
});

// Define associação entre Digimon e Level
Digimon.belongsTo(Level, { foreignKey: 'level' });

export default Digimon;
