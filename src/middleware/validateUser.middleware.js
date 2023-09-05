const Joi = require("joi");

const ValidateUser = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string(),
    city: Joi.string(),
  });

  const { error } = schema.validate(data, { abortEarly: false });

  if (!error) {
    return true;
  } else {
    return error;
  }
};

module.exports = ValidateUser;
