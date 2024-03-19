const { sequelize, DataTypes, Model } = require('../config/connection');

class Customer extends Model {}
Customer.init({
  // Sequelize automatically handles the SERIAL primary key, so you only need to define the other fields
  customer_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  street_address: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  province: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  country: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  postal_code: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
}, {
  sequelize, // passing the `sequelize` instance is required
  modelName: 'Customer', // defines the name for the model
  tableName: 'customers', // explicitly specifies table name
  timestamps: false // assuming you don't want Sequelize to automatically add timestamp fields for `createdAt` and `updatedAt`
});

module.exports = Customer;
