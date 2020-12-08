// 导入影票集合构造函数
const { Ticket } = require("../../model/ticket");
// 导入影院集合构造函数
const { Movie } = require("../../model/movie");
const { Seat } = require("../../model/seat");
module.exports = async (req, res) => {
  await Ticket.findOneAndDelete({ _id: req.query.id });
  await Movie.findOneAndUpdate(
    { _id: req.query.mid },
    { $inc: { oldSeatNum: +1 } }
  );
  await Seat.findOneAndDelete({ id: req.query.sid });
  res.redirect("/home/userInfo");
};
