module.exports = function (sequelize, Datatypes) {
    var Burgers = sequelize.define('Burgers', {
        burger_name: {
            type: Datatypes.STRING,
            notNull: true,
            len: [1,30]
        },
        devoured: {
            type: Datatypes.BOOLEAN,
            defaultValue: false
        }

    }, {
        timestamps: false
    })
    return Burgers
}