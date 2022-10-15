import EpisodeModel from "../models/episode.js";

const Service = {
  getAll: async () => {
    try {
      const data = await EpisodeModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getAllSeasonSeriesGenre: async () => {
    try {
      const data = await EpisodeModel.find({})
        .populate([{
          path: 'season_id',
          populate: {
            path: 'series_id',
            populate: {
              path: 'genre_id'
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
      const data = await EpisodeModel.findById(id);

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  add: async (body) => {
    try {
      const savedData = await EpisodeModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  patch: async ({ id, ...body }) => {
    try {
      const savedData = await EpisodeModel.findByIdAndUpdate(id, body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  delete: async (id) => {
    try {
      const savedData = await EpisodeModel.findByIdAndDelete(id);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default Service;
