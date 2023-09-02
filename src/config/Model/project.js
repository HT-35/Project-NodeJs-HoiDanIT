const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const { all } = require("../../router/home.router");

const { customer, customerModel } = require("./customer.model");

// shape data
// const customerSchema = new mongoose.Schema({
//   name: String,
//   phone: String,
//   email: String,
// });

const userLeaderSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    startDate: String,
    endDate: String,
    description: String,
    customerInfor: customer,
    usersInfor: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    leader: userLeaderSchema,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

projectSchema.plugin(mongooseDelete, { overrideMethods: all });

// create model
const Project = mongoose.model("Project", projectSchema);

module.exports = { projectSchema, Project };
