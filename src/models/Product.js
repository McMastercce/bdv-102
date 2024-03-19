const { sequelize, DataTypes, Model } = require('../config/connection');

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

class Product extends Model {}
Product.init({
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'product_types',
      key: 'product_type_id',
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  sku: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  modelName: 'Product',
  tableName: 'products',
  timestamps: false
});

// Define the relationship to ProductType
Product.belongsTo(ProductType, { foreignKey: 'product_type_id', as: 'productType' });
ProductType.hasMany(Product, { foreignKey: 'product_type_id', as: 'products' });

module.exports = { Product, ProductType  };
