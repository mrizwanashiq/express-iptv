import StreamModel from "../models/stream.js";

const Service = {
  getAll: async () => {
    try {
      const data = await StreamModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  getAllEpisodeSeasonSeriesGenre: async () => {
    try {
      const data = await StreamModel.find({})
        .populate([{
          path: 'episode_id',
          populate: {
            path: 'season_id',
            populate: {
              path: 'series_id',
              populate: {
                path: 'genre_id'
              }
            }
          }
        }]);

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getById: async (id) => {
    try {
      const data = await StreamModel.findById(id);

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  add: async (body) => {
    try {
      const savedData = await StreamModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  patch: async ({ id, ...body }) => {
    try {
      const savedData = await StreamModel.findByIdAndUpdate(id, body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  delete: async (id) => {
    try {
      const savedData = await StreamModel.findByIdAndDelete(id);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default Service;
