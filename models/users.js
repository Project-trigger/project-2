// Users model


module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    } 
  }, 
  {
    classMethods: {
      associate: function(models) {
        User.hasOne(models.Debates);
      }
    }
  });
  return Users;
};
  