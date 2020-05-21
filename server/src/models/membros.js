const Sequelize = require('sequelize');
const sequelizePaginate = require('sequelize-paginate');
const sequelize = require('../../server');

const Model = Sequelize.Model;

class Membro extends Model{};
Membro.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    undername: {
        type: Sequelize.STRING,
        allowNull: false
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: '1'
    },
    leader: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
}, {
    sequelize, 
    modelName: 'Membros'
});

sequelizePaginate.paginate(Membro);
module.exports = Membro;