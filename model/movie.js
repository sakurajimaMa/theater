// 1. 引入mongoose模块
const mongoose = require("mongoose");

// 2. 创建剧目集合规则
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 20,
    minlength: 1,
    required: [true, "请填写电影名称"],
  },
  movieType: {
    type: String,
    required: [true, "请填写电影类型"],
  },
  mainActor: {
    type: String,
    required: [true, "请填写电影主要演员"],
  },
  publishDate: {
    type: Date,
    default: Date.now,
  },
  oldSeatNum: {
    type: Number,
  },
  seatNum: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MovieHall",
    required: [true, "请选择影厅"],
  },
  price: {
    type: Number,
    required: [true, "请输入价格"],
  },
  cover: {
    type: String,
    default: null,
  },
  content: {
    type: String,
  },
});

// 3. 根据规则创建集合
const Movie = mongoose.model("Movie", movieSchema);

// 4. 讲集合规则作为模块成员进行导出
module.exports = { Movie };
