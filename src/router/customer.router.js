const customer = require("express").Router();
const multer = require("multer");

const {
  uploadController,
  getAllCustomer,
  updateCustomer,
  softDelete,
  listSoftDelete,
  restoreByID,
  deleteCustomer,
  deleteArray,
} = require("../controller/customer.controller");

const {
  queryForm,
  paramsController,
} = require("../controller/query.controller");

const storage = require("../middleware/upload.img");

const upload = multer({ storage: storage });

// create information Customer & img customer //  post:  http://localhost:3000/customer/create
customer.post("/create", upload.single("imgage"), uploadController);

// get All customer  // http://localhost:3000/customer/
customer.get("/", getAllCustomer);

// put  customer  //   localhost:3000/customer/:id
customer.put("/:id", upload.single("imgage"), updateCustomer);

// delete Soft Customer // http://localhost:3000/customer/id
customer.delete("/:id", softDelete);

// Get List soft delete  //  localhost:3000/customer/softdelete
customer.get("/softdelete", listSoftDelete);

// delete document // http://localhost:3000/customer/delete/id
customer.delete("/deleteCustomer/:id", deleteCustomer);

// restore Customer by Id  //  http://localhost:3000/customer/delete/id
customer.get("/delete/:id", restoreByID);

// delete Arr Customer // http://localhost:3000/customer/delete/arr
customer.delete("/delete/arr", deleteArray);

// query form  // http://localhost:3000/customer/form?name=huy
customer.get("/form", queryForm);

// params  // http://localhost:3000/customer/form?name=huy
customer.get("/form/:id/:size", paramsController);

module.exports = customer;
