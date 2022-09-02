module.exports = ( sequelize, DataTypes) => {
    const schema = {
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: {
                  args: [true],
                  msg: "Author needed",
                },
                notNull: {
                  args: [true],
                  msg: "Author needed",
                },
              },
        },
    };

    const AuthorModel = sequelize.define('Author', schema);
    return AuthorModel;
};