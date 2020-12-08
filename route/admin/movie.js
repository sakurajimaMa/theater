// 将文章集合的构造函数导入到当前文件中
const { Movie } = require("../../model/movie");
// 导入mongoose-sex-page模块
const pagination = require("mongoose-sex-page");

module.exports = async (req, res) => {
  // 接收客户端传递过来的页码
  const page = req.query.page;
  // 标识 表示当前访问的是文章管理页面
  req.app.locals.currentLink = "movie";
  // 获取总共电影数目
  let count = await Movie.countDocuments({});
  // page 指定当前页
  // size 指定每页显示数据条数
  // display 指定客户端要显示的页码数量
  // exec 向数据库中发送查询请求
  // 查询所有文章数据
  let movies = await pagination(Movie)
    .find()
    .populate("seatNum")
    .page(page)
    .size(8)
    .display(3)
    .exec();
  res.render("admin/movie.art", {
    movies: movies,
    count,
  });
};
