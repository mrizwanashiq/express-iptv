import Joi from "joi";

const schema = {
  add: {
    body: Joi.object().keys({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8).max(15),
    }),
  },
  registration: {
    body: Joi.object().keys({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8).max(15),
    }),
  },
  login: {
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8).max(15),
    }),
  },
  patch: {
    params: Joi.object().keys({
      id: Joi.string().required()
    }),
    body: Joi.object().keys({
      first_name: Joi.string(),
      last_name: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().min(8).max(15),
    }),
  },
  delete: {
    params: Joi.object().keys({
      id: Joi.string().required()
    }),
  },
};

export default schema;
