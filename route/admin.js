// 引用express框架
const express = require("express");
// 创建博客管理页面路由
const admin = express.Router();

// 渲染登陆页面
admin.get("/login", require("./admin/loginPage"));

// 实现登录功能
admin.post("/login", require("./admin/login"));

// // 实现注册功能
// admin.post("/register", require("./admin/register"));

// 创建用户列表路由
admin.get("/user", require("./admin/userPage"));

// 实现退出功能
admin.get("/logout", require("./admin/logout"));

// 创建用户编辑页面路由
admin.get("/user-edit", require("./admin/user-edit"));

// 创建用户添加功能路由
admin.post("/user-edit", require("./admin/user-edit-fn.js"));

// //
// admin.post("/user-modify", require("./admin/user-modify"));

// 删除用户功能路由
admin.get("/delete", require("./admin/user-delete"));

// 电影列表页面路由
admin.get("/movie", require("./admin/movie"));

// 电影编辑页面路由
admin.get("/movie-edit", require("./admin/movie-edit"));

// 实现电影添加功能的路由
admin.post("/movie-add", require("./admin/movie-add"));

// // 修改电影页面路由
// admin.post("/movie-modify", require("./admin/movie-modify"));

// 删除电影功能路由
admin.get("/movie-delete", require("./admin/movie-delete"));

// 数据分析功能路由
admin.get("/analyse", require("./admin/analyse"));

// 影厅管理功能路由
admin.get("/movieHall", require("./admin/movieHall"));

// 创建影厅添加功能路由
admin.get("/movieHall-edit", require("./admin/movieHall-edit"));
admin.post("/movieHall-edit", require("./admin/movieHall-edit-fn"));

admin.get("/movieHall-delete", require("./admin/movieHall-delete"));
// 将路由对象作为模块成员进行导出
module.exports = admin;
