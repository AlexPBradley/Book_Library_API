// src/models/reader.js
module.exports = (sequelize, DataTypes) => {
    const schema = {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: [true],
            msg: "Name needed",
          },
          notNull: {
            args: [true],
            msg: 'Name needed'
          }
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: [true],
            msg: "Email needed",
          },
          isEmail: {
            args: [true],
            msg: 'Valid Email needed'
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: [true],
            msg: "Password needed",
          },
          charcterLengthCheck(value) {
            if (value.length < 8)
            throw new Error('Password must be minimum 8 characters');
          },
        },
      },
    };
  
    const ReaderModel = sequelize.define('Reader', schema);
    return ReaderModel;
  };