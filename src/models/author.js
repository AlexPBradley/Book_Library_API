module.exports = ( sequelize, DataTypes) => {
    const schema = {
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                  args: [true],
                  msg: "Author needed",
                },
                notNull: {
                  args: [true],
                  msg: "Author needed",
                },
                unique: {
                    args: [true],
                    msg: 'Author already added'
                },
              },
        },
    };

    const AuthorModel = sequelize.define('Author', schema);
    return AuthorModel;
};