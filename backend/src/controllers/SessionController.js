// index, show, store, update, destroy únicos métodos que deveriam estar dentro de um controller
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }
};