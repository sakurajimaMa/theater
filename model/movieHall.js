const mongoose = require("mongoose");

// 创建座位集合规则
const movieHallSchema = new mongoose.Schema({
  movieHallName: {
    type: String,
    required: true,
  },

  movieSeatNum: {
    type: Number,
    required: true,
  },
});

//
const MovieHall = mongoose.model("MovieHall", movieHallSchema);

module.exports = { MovieHall };
