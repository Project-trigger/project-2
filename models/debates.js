// Users model


module.exports = function(sequelize, DataTypes) {
  var Debates = sequelize.define("Debates", {
    user_id: {
     type: DataTypes.INTEGER,
     allowNull: false
    },
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
  