
module.exports = function(sequelize, Datatypes){
    var Burgers = sequelize.define('Burgers',{
        burger_name: Datatypes.STRING,
        devoured: Datatypes.BOOLEAN
    },{
        timestamps: false
    })
    return Burgers
}


 