const { Movie } = require("../../model/movie");
const { Ticket } = require("../../model/ticket");

const { Seat } = require("../../model/seat");
module.exports = async (req, res) => {
  // 获取要删除的电影id
  // 根据id删除电影
  await Movie.findOneAndDelete({ _id: req.query.id });
  // 根据id删除票
  await Ticket.findOneAndDelete({ mid: req.query.id });
  await Seat.remove({});
  // 将页面重定向到电影列表页面
  res.redirect("/admin/movie");
};
