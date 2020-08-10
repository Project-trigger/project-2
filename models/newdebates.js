module.exports = function (sequelize, DataTypes) {
    var NewDebates = sequelize.define("Debates", {
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      incumbent_username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      challenger_username: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      topic: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      incumbent_body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      challenger_body: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      incumbent_votes: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      challenger_votes: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      comments: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    });
    return NewDebates;
  };
  