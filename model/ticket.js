// 创建影票集合
// 引入mongoose第三方模块
const mongoose = require("mongoose");

// 创建影票集合规则
const ticketSchema = new mongoose.Schema({
  mid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  },
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  sid: {
    type: String,
    ref: "Seat",
  },
});

// 创建影票集合
const Ticket = mongoose.model("Ticket", ticketSchema);

// 将影票集合构造函数作为模块成员进行导出
module.exports = { Ticket };
