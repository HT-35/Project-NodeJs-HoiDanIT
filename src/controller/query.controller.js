const customerModel = require("../config/Model/customer.model");

const aqp = require("api-query-params");

const queryForm = async (req, res) => {
  try {
    const pageOptions = {
      page: Number(req.query.page) || 0,
      limit: Number(req.query.limit) || 2,
    };
    const { filter } = aqp(req.query);
    delete filter.page;
    console.log(filter);

    const getAll = await customerModel
      .find(filter)
      .skip((pageOptions.page - 1) * pageOptions.limit)
      .limit(pageOptions.limit)
      .exec();

    // không dùng thư viện
    // const getAll = await customerModel
    //   .find({
    //     // name: { $regex: ".*" + pageOptions.name + ".*" },
    //     // description: { $regex: ".*" + pageOptions.description + ".*" },
    //     // $regex: pageOptions.name,
    //     // $options: "i",
    //   })
    //   .skip((pageOptions.page - 1) * pageOptions.limit)
    //   .limit(pageOptions.limit)
    //   .exec();

    getAll;
    console.log(getAll);

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
