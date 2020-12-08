// 创建座位集合
const mongoose = require("mongoose");

// 创建座位集合规则
const seatSchema = new mongoose.Schema({
  mid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  },
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  sid: {
    type: Number,
    required: true,
  },
  id: {
    type: String,
  },
  state: {
    type: Number,
    default: 0,
  },
});
// 3. 根据规则创建集合
const Seat = mongoose.model("Seat", seatSchema);

// 4. 讲集合规则作为模块成员进行导出
module.exports = { Seat };
