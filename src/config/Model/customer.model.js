const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const mongoosePaginate = require("mongoose-paginate-v2");
const customer = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      min: 10,
      max: 30,
    },
    phone: {
      type: String,
      min: 10,
      max: 13,
    },
    email: {
      type: String,
      min: 5,
      max: 30,
    },
    imgage: String,
    description: String,
  },
  { timestamps: true }
);

customer.plugin(mongoosePaginate);
// add plugin mongooseDelete for soft remove
customer.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

const customerModel = mongoose.model("customerModel", customer);

module.exports = customerModel;
