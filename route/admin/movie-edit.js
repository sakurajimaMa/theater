const { Movie } = require("../../model/movie");
const { MovieHall } = require("../../model/movieHall");
module.exports = async (req, res) => {
  // 标识 表示当前访问的是电影管理页面
  req.app.locals.currentLink = "movie";
  // 获取到地址栏中的id参数
  const { message, id } = req.query;

  const movieHall = await MovieHall.find();
  // 如果当前传递了id参数
  if (id) {
    // 修改操作
    let user = await Movie.findOne({ _id: id });
    // 渲染用户编辑页面（修改）
    res.render("admin/movie-edit", {
      message,
      user,
      link: "/admin/movie-modify?id=" + id,
      button: "修改",
    });
  } else {
    // 添加操作
    res.render("admin/movie-edit", {
      movieHall: movieHall,
      message: message,
      link: "/admin/movie-add",
      button: "添加",
    });
  }
};
