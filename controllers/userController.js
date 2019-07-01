const db = require('../models');

module.exports = {
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.user.id }, req.body, {new: true})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findProfileByName: function (req, res) {
        db.User
            .find({_id: req.params._id}, 'name email phone description avatar')
            .then(user => res.json(user))
            .catch(err => res.status(422).json(err));

    }, 
    updateName: function (req, res){
        db.User
            .findOneAndUpdate({_id: req.user.id }, req.body, {new: true})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err)); 

    }
}