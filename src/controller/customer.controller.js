const customerModel = require("../config/Model/customer.model");

const uploadController = (req, res) => {
  const { name, address, phone, email, description } = req.body;

  // lấy ra địa chỉ ảnh
  const imgPath = req.file.path;
  console.log(imgPath);
};

const getAllCustomer = async (req, res) => {
  const getAll = await customerModel.find();
  // console.log(getAll);
  res.status(200).json({
    success: true,
    data: getAll,
  });
};

const updateCustomer = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const { name, address, phone, email, description } = req.body;
  // const imgPath = req.file.path;
  // console.log(imgPath);
  const update = await customerModel.updateOne(
    { _id: id },
    {
      name: name,
      address: address,
      phone: phone,
      email: email,
      // imgage: imgPath,
      description: description,
    }
  );
  update;
  res.status(200).send("thanh cong");
};

const softDelete = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const deleteSoft = await customerModel.delete({ _id: id });
    deleteSoft;
    const customer = await customerModel.findOneDeleted({ _id: id });
    // res.status(200).send(deleteSoft);
    res.status(200).json({
      success: true,
      DeleteData: customer,
    });
  } catch (error) {
    res.status(400).send("thanh that bai", error);
  }
};

const listSoftDelete = async (req, res) => {
  try {
    const listDelete = await customerModel.findWithDeleted({ deleted: false });
    console.log(listDelete);
    res.status(200).json({
      success: true,
      data: listDelete,
    });
  } catch (error) {
    console.error(error); // In ra lỗi để dễ dàng kiểm tra và debug
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching deleted items.",
      error: error.message, // Trả lại thông báo lỗi cho phía client nếu cần
    });
  }
};

const restoreByID = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id);

    const restore = await customerModel.restore({ _id: id });
    res.status(200).send({
      success: true,
      data: restore,
    });
  } catch (error) {
    console.log(error);
    res.status(200).send(error);
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const id = req.params.id;
    const findcustomer = await customerModel.findById({ _id: id });
    // console.log(findcustomer);
    // if (findcustomer) {
    //   const deleteDocument = await customerModel.deleteOne({ _id: id });
    //   res.status(200).send(deleteDocument);
    // } else {
    //   res.status(200).send("Not Found Customer !!!");
    // }

    const deleteDocument = await customerModel.deleteOne({ _id: id });
    res.status(200).send(deleteDocument);
  } catch (error) {
    res.status(404).send("Not Found Customer !!!");
  }
};

const deleteArray = async (req, res) => {
  let arr = req.body;
  const customerArray = arr.customers;
  console.log(customerArray);
  try {
    const deleteArr = await customerModel.deleteMany({
      _id: { $in: customerArray },
    });
    console.log("Deleted successfully");
    res.status(200).json({
      success: true,
      data: deleteArr,
    });
  } catch (error) {
    console.error(error);
    res.status(200).json({
      success: true,
      data: error,
    });
  }
};

module.exports = {
  uploadController,
  getAllCustomer,
  updateCustomer,
  softDelete,
  listSoftDelete,
  restoreByID,
  deleteCustomer,
  deleteArray,
};