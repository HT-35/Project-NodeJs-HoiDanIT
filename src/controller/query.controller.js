const customerModel = require("../config/Model/customer.model");

const queryForm = async (req, res) => {
  try {
    const pageOptions = {
      page: Number(req.query.page) || 0,
      limit: Number(req.query.limit) || 2,
      name: req.query.name,
    };

    const getAll = await customerModel
      .find({
        name: { $regex: ".*" + pageOptions.name + ".*" },
        // $regex: pageOptions.name,
        // $options: "i",
      })
      .skip((pageOptions.page - 1) * pageOptions.limit)
      .limit(pageOptions.limit)
      .exec();

    getAll;
    console.log(pageOptions.name);

    res.status(200).json({
      success: true,
      data: getAll,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      data: error,
    });
  }
};

const paramsController = (req, res) => {
  const data = req.params;
  console.log(data);

  res.status(200).json({
    success: true,
    data: data,
  });
};

module.exports = {
  queryForm,
  paramsController,
};
