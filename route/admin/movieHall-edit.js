const { MovieHall } = require("../../model/movieHall");
module.exports = async (req, res) => {
  // 标识 表示当前访问的是用户管理页面
  req.app.locals.currentLink = "movieHall";
  // 获取到地址栏中的id参数
  const { message } = req.query;
  // 添加操作
  res.render("admin/movieHall-edit", {
    message: message,
    link: "/admin/movieHall-edit",
    button: "添加",
  });
};
