// Burger models

// The burger has a burger_name attribute of type DataTypes.String
// and a devoured attribute that is false by default

module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  var Burger = sequelize.define("Email", {
=======
  var Burger = sequelize.define("Burger", {
>>>>>>> a4f7018a63d92525dc2eced12dea5b4c97237cb9
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Burger.hasOne(models.Customer);
      }
    }
  });
  return Burger;
};
