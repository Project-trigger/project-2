// Users model


module.exports = function(sequelize, DataTypes) {
  var Debates = sequelize.define("Debates", {
    
    incumbent_username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    topic: {
      type: DataTypes.STRING,
      allowNull: false
    },
    incumbent_body: {
      type: DataTypes.STRING,
      allowNull: true
    },
    challenger_body: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }
  );
  return Debates;
};
  