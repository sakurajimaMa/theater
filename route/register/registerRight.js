module.exports = async (req, res) => {
  // 获取到地址栏中的id参数
  const { message } = req.query;
  // 添加操作
  res.render("admin/register", {
    message: message,
  });
};
