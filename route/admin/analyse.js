const { Movie } = require("../../model/movie");
module.exports = async (req, res) => {
  req.app.locals.currentLink = "analyse";
  const movies = await Movie.find().populate("seatNum");

  // console.log(movies);
  res.render("admin/analyse", { movies });
};
