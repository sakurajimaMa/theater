const { MovieHall } = require("../../model/movieHall");
const { Movie } = require("../../model/movie");
const { Ticket } = require("../../model/ticket");
const { Seat } = require("../../model/seat");
module.exports = async (req, res) => {
  // 获取要删除的影厅id
  // 根据id删除影厅
  await MovieHall.findOneAndDelete({ _id: req.query.id });
  console.log(req.query);
  await Movie.remove({ seatNum: req.query.id });

  // 将页面重定向到用户列表页面
  res.redirect("/admin/movieHall");
};
