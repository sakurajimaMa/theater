module.exports = (req, res) => {
  // 删除session
  req.session.destroy(function () {
    // 清除用户信息
    req.app.locals.userInfo = null;
    // 删除cookie
    res.clearCookie("connect.sid");
    // 重定向到用户登录页面
    res.redirect("/home");
  });
};
