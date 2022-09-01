module.exports = ( sequelize, DataTypes) => {
    const schema = {
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                  args: [true],
                  msg: "Genre needed",
                },
                notNull: {
                  args: [true],
                  msg: "Genre needed",
                },
                unique: {
                    args: [true],
                    msg: 'Genre already added'
                },
              },
        },
    };

    const GenreModel = sequelize.define('Genre', schema);
    return GenreModel;
};