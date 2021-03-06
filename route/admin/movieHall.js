// 导入用户集合构造函数
const { MovieHall } = require("../../model/movieHall");
module.exports = async (req, res) => {
  // 标识 表示当前访问的是用户管理页面
  req.app.locals.currentLink = "movieHall";
  // 接收客户端传递过来的当前页参数
  let page = req.query.page || 1;
  // 每一页显示的数据条数
  let pageSize = 10;
  // 查询用户数据的总数
  let count = await MovieHall.countDocuments({});
  // 总页数
  let total = Math.ceil(count / pageSize);

  // 页码对应的数据查询开始位置
  let start = (page - 1) * pageSize;

  // 将用户信息从数据库中查询出来
  let movieHalls = await MovieHall.find({}).limit(pageSize).skip(start);
  // 渲染用户列表模板
  res.render("admin/movieHall", {
    movieHalls,
    page,
    total,
    count,
  });
};
