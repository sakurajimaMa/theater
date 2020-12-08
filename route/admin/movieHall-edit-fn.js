//引入用户集合的构造函数
const { MovieHall } = require("../../model/movieHall");

module.exports = async (req, res, next) => {
  // 将用户信息添加到数据库中
  await MovieHall.create(req.body);
  // 将页面重定向到用户列表页面
  res.redirect("/admin/movieHall");
};
