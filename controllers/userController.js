const db = require('../models');

module.exports = {
    update: function(req, res) {
        db.User
          .findOneAndUpdate({ _id: req.user.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
}