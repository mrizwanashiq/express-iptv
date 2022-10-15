import UserModel from "../models/user.js";
import jwt from 'jsonwebtoken'

const UserService = {
  getAll: async () => {
    try {
      const data = await UserModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getById: async (id) => {
    try {
      const data = await UserModel.findById(id);

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  add: async (body) => {
    try {
      const savedData = await UserModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  registration: async (body) => {
    try {
      const isExists = await UserModel.findOne({ email: body.email });

      if (isExists) {
        return { message: "error", data: 'User Already Exists' };
      }

      const savedData = await UserModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  login: async (body) => {
    try {
      const isExists = await UserModel.findOne({ email: body.email });

      if (isExists) {
        if (body.password !== isExists.password) {
          return { message: "error", data: 'Password does not match' };
        }
      } else {
        return { message: "error", data: 'Email does not match' };
      }

      delete isExists._doc.password;

      const token = jwt.sign(isExists._doc, 'mysecret');

      return { message: "success", data: { token } };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  patch: async ({ id, ...body }) => {
    try {
      const savedData = await UserModel.findByIdAndUpdate(id, body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  delete: async (id) => {
    try {
      const savedData = await UserModel.findByIdAndDelete(id);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default UserService;
