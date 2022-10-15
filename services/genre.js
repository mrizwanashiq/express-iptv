import GenreModel from "../models/genre.js";

const Service = {
  getAll: async () => {
    try {
      const data = await GenreModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getAllSeries: async () => {
    try {
      const data = await GenreModel.aggregate([
        {
          $lookup: {
            localField: '_id',
            from: 'series',
            foreignField: 'genre_id',
            as: 'series',
            pipeline: [
              {
                $lookup: {
                  localField: '_id',
                  from: 'seasons',
                  foreignField: 'series_id',
                  as: 'seasons',
                  pipeline: [
                    {
                      $lookup: {
                        localField: '_id',
                        from: 'episodes',
                        foreignField: 'season_id',
                        as: 'episodes',

                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]);

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getById: async (id) => {
    try {
      const data = await GenreModel.findById(id);

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  add: async (body) => {
    try {
      const savedData = await GenreModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  patch: async ({ id, ...body }) => {
    try {
      const savedData = await GenreModel.findByIdAndUpdate(id, body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  delete: async (id) => {
    try {
      const savedData = await GenreModel.findByIdAndDelete(id);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
};

export default Service;
