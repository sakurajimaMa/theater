const guard = (req, res, next) => {
  // 判断用户访问的是否是登陆页面
  // 判断用户登录状态
  // 如果用户是登陆的。将请求放行
  // 如果用户不是登陆的，将请求重定向到登陆页面
  if (req.url != "/login" && !req.session.username) {
    res.redirect("/admin/login");
  } else {
    // 如果用户是登录状态，并且是普通用户
    if (req.session.role == "normal") {
      // 让他跳转到博客首页，阻止向下执行
      return res.redirect("/home/");
    }
    next();
  }
};
module.exports = guard;
