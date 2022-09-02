module.exports = ( sequelize, DataTypes) => {
    const schema = {
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: {
                  args: [true],
                  msg: "Genre needed",
                },
                notNull: {
                  args: [true],
                  msg: "Genre needed",
                },
              },
        },
    };

    return sequelize.define('Genre', schema);
};