// 引用express框架
const express = require("express");
// 创建影院展示页面路由
const home = express.Router();

// 渲染电影院首页
home.get("/", require("./home/homePage"));

// 渲染电影购买详情页面
home.get("/movieInfo", require("./home/movieInfo"));

// 渲染电影购买
home.get("/movieBuy", require("./home/movieBuy"));

// 创建评论功能路由
home.post("/comment", require("./home/comment"));

// 渲染个人页面
home.get("/userInfo", require("./home/userInfo"));

// 渲染退票页面
home.get("/returnTicket", require("./home/returnTicket"));

// 渲染用户退出页面
home.get("/logout", require("./home/logout"));
// 将路由对象作为模块成员进行导出
module.exports = home;
