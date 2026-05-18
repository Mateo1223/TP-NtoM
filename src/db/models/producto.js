'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Producto.belongsToMany(models.Componente, {
        through: 'Producto_Componente', as: 'componentes'
      })
      Producto.belongsToMany(models.Fabricante, {
        through: 'Producto_Fabricante', as: 'fabricantes'
      })

    }
  }
  Producto.init({
    nombre: { type: DataTypes.STRING, allowNull: false, unique: true},
    descripcion: { type: DataTypes.STRING},
    precio: { type: DataTypes.DOUBLE, allowNull: false },
    pathImg: { type: DataTypes.TEXT, unique: true}
  }, {
    sequelize,
    modelName: 'Producto',
    timestamps: false
  });
  return Producto;
};