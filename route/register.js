// 引用express框架
const express = require("express");
// 创建影院展示页面路由
const register = express.Router();

register.get("/", require("../route/register/register"));

register.post("/", require("./register/registerRight-fn"));

// 创建用户注册页面路由
register.get("/", require("./register/registerRight"));
// 将路由对象作为模块成员进行导出
module.exports = register;
