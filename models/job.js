const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  jobTitle: { type: String, required: true },
  jobDescription: { type: String, required: true },
  jobCompensation: {type: String, required: true},
  date: { type: Date, default: Date.now }, 
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;