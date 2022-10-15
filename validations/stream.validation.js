import Joi from "joi";

const schema = {
  add: {
    body: Joi.object().keys({
      episode_id: Joi.string().required(),
      user_id: Joi.string().required(),
      time: Joi.string().required(),
    }),
  },
  patch: {
    params: Joi.object().keys({
      id: Joi.string().required()
    }),
    body: Joi.object().keys({
      episode_id: Joi.string(),
      user_id: Joi.string(),
      time: Joi.string()
    }),
  },
  delete: {
    params: Joi.object().keys({
      id: Joi.string().required()
    }),
  },
  getById: {
    params: Joi.object().keys({
      id: Joi.string().required()
    }),
  },
};

export default schema;
