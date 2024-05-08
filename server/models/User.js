module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Users.associate = (Models) => {
    Users.hasMany(Models.Post),
      {
        onDelete: "cascade",
      };
  };

  return Users;
};
