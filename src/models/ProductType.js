const { sequelize } = require('../config/connection');
const { DataTypes, Model } = require('sequelize');

class ProductType extends Model {}
ProductType.init({
  product_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  type_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'ProductType',
  tableName: 'product_types',
  timestamps: false // Assuming you don't want Sequelize to automatically manage createdAt and updatedAt timestamps
});
