const { Movie } = require("../../model/movie");
module.exports = async (req, res) => {
  // 接收客户端传递过来的当前页参数
  let page = req.query.page || 1;
  // 每一页显示的数据条数
  let pageSize = 10;
  // 查询用户数据的总数
  let count = await Movie.countDocuments({});
  // 总页数
  let total = Math.ceil(count / pageSize);

  // 页码对应的数据查询开始位置
  let start = (page - 1) * pageSize;

  // 将用户信息从数据库中查询出来
  let movies = await Movie.find({}).limit(pageSize).skip(start);
  // 渲染用户列表模板
  res.render("home/default", {
    movies,
    page,
    total,
    count,
  });
};
