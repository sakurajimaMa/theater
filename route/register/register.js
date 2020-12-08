module.exports = async (req, res) => {
  const { message } = req.query;
  // console.log(message);
  res.render("admin/register.art", { message });
};
