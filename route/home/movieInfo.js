// 导入电影集合构造函数
const { Movie } = require("../../model/movie");
// 导入评论集合构造函数
const { Comment } = require("../../model/comment");
const { Seat } = require("../../model/seat");
module.exports = async (req, res) => {
  // 接收客户端传递过来的电影id值
  const id = req.query.id;
  // 根据id查询电影详细信息
  const movie = await Movie.findOne({ _id: id }).populate("seatNum");
  const seat = await Seat.find({ mid: id });

  // 查询当前电影所对应的评论信息
  let comments = await Comment.find({ mid: id }).populate("uid");

  res.render("home/movieInfo", {
    movie,
    comments,
    seat,
  });
};
