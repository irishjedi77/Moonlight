const db = require('../models');



module.exports = {
  create: function (req, res) {
    db.Job
      .create({ ...req.body, user: req.user.id })
      // .then(function (dbUser) {
      //   return db.Job.findOneAndUpdate({}, { $push: { user: dbNote._id } }, { new: true });
      // })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function (req, res) {
    db.Job
      .find({})
      .populate("user", "name email")
      .sort({ date: -1 })
      .then(dbModel =>res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  findJobByName: function(req, res){
    //console.log("req.user.id", req.user.id)
    //console.log("req.params._id", req.params._id)
    db.Job
      .find({user: req.params._id})
      .then(dbModel =>{
        console.log("dbModel", dbModel)
        res.json(dbModel)})
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });

  }, 
  removeJob: function(req, res) {
    //console.log("req.params._id:", req.params._id)
    db.Job
      .findById({ _id: req.params._id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};