const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const { projectSchema, Project } = require("./project");

const { userSchema, User } = require("./user");

//shape data
const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    status: String,
    startDate: String,
    endDate: String,
    usersInfo: userSchema,
    projectInfo: projectSchema,
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

// Override all methods
taskSchema.plugin(mongoose_delete, { overrideMethods: "all" });
const Task = mongoose.model("task", taskSchema);

module.exports = Task;
