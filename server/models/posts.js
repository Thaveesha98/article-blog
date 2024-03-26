const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  const Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    titleText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Post.associate = (Models) => {
    Post.hasMany(Models.Comments),
      {
        onDelete: "cascade",
      };
  };

  return Post;
};
