module.exports = (sequelize, type) => {
    return sequelize.define('vehicle', {
        no: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        make:{
            type:type.STRING,
            allowNull:false
        },
        model:{
            type:type.STRING,
            allowNull: false
        },
        year:{
            type:type.INTEGER,
            allowNull: false
        },
        price:{
            type:type.INTEGER,
            allowNull: false
        },
        status:{
            type:type.STRING,
            allowNull: false
        }
    });
  };