const Membro = require('../models/membros');


module.exports = {
    async showAll(req, res) {
        const { page=1 } = req.query;
        const membro = await Membro.paginate({ page: 1, paginate: 5, where: { active: true }})

        return res.json(membro);
    },

    async create(req, res) {
        const membro = await Membro.create(req.body);

        return res.json(membro);
    },

    async find(req, res) {
        const membro = await Membro.findByPk(req.params.id);

        return res.json(membro);
    },

    async update(req, res){
        const membro = await Membro.update(req.body, {where: {id: req.params.id}});

        return res.json(membro);
    },

    async delete(req, res){
        await Membro.destroy({where: {id: req.params.id}});

        return res.send();
    },

    async showInactive(req, res){
        const membro = await Membro.findAll({
            where: {
                active: false
            }
        })

        return res.json(membro);
    },

    async setActive(req, res){
        await Membro.update(
            {active: true},
            {where: {id: req.params.id}});

            return res.send();
    },

    async setInactive(req, res){
        await Membro.update(
            {active: false},
            {where: {id: req.params.id}});

            return res.send();
        }
}