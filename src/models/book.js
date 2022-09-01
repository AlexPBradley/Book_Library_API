module.exports = ( sequelize, DataTypes) => {
    const schema = {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                  args: [true],
                  msg: "Title needed",
                },
                notNull: {
                  args: [true],
                  msg: "Title needed",
                },
              },
        },
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
              },
        },
        ISBN: {
            type: DataTypes.STRING,
        },
    };

    return sequelize.define('Book', schema);
};