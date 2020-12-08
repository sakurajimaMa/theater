// 导入影票集合构造函数
const { Ticket } = require("../../model/ticket");
// 导入用户集合构造函数
const { User } = require("../../model/user");
module.exports = async (req, res) => {
  // 接收客户端传递过来的当前页参数
  let page = req.query.page || 1;
  // 每一页显示的数据条数
  let pageSize = 10;
  // 查询用户数据的总数
  let count = await Ticket.countDocuments({});
  // 总页数
  let total = Math.ceil(count / pageSize);

  // 页码对应的数据查询开始位置
  let start = (page - 1) * pageSize;
  // 获取用户id
  if (req.app.locals.userInfo) {
    let uid = req.app.locals.userInfo._id;
    // 将用户信息从数据库中查询出来
    let tickets = await Ticket.find({ uid: uid })
      .limit(pageSize)
      .skip(start)
      .populate(["uid", "mid"]);
    // 渲染用户列表模板
    res.render("home/userInfo", {
      tickets,
      page,
      total,
      count,
    });
  } else {
    return res.redirect("/admin");
  }
};
