// Users model

// The burger has a burger_name attribute of type DataTypes.String
//the email data can be NULL

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    classMethods: {
      associate: function(models) {
        User.hasOne(models.Debates);
      }
    }
  });
  return User;
};
  