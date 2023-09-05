const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const { customer, customerModel } = require("./customer.model");

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
    // embedded is customer
    customerInfor: customer,
    usersInfor: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    leader: userLeaderSchema,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "task" }],
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

// add plugin mongooseDelete for soft remove
projectSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

// create model
const Project = mongoose.model("Project", projectSchema);

module.exports = { projectSchema, Project };
