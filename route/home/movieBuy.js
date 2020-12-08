const { Movie } = require("../../model/movie");
const { Ticket } = require("../../model/ticket");
const { Seat } = require("../../model/seat");
module.exports = async (req, res) => {
  // 获取页面传递的电影id
  const { id } = req.query;
  let arr = id.split("-");
  let mid = arr[0];
  let movieHallId = arr[1];
  let seatId = arr[2];
  if (req.app.locals.userInfo) {
    const uid = req.app.locals.userInfo._id;

    if (mid != "") {
      // 在数据库中查找电影数据
      const movie = await Movie.findOne({ _id: mid });
      // 如果座位大于0表示可以购买座位
      if (movie.oldSeatNum > 0) {
        const seat = await Seat.findOne({
          uid: uid,
          mid: mid,
          sid: seatId,
          state: 1,
        });
        if (!seat) {
          await Movie.findOneAndUpdate(
            { _id: mid },
            { $inc: { oldSeatNum: -1 } }
          );
          await Ticket.create({ uid: uid, mid: mid, sid: id });
          await Seat.create({
            uid: uid,
            mid: mid,
            sid: seatId,
            id: id,
            state: 1,
          });
        }
      }
    }
  } else {
    return res.redirect("/admin");
  }
  res.redirect("/home");
};
