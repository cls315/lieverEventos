const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "categorie",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      categorie: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
