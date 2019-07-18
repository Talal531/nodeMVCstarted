const Names = require("../models/model");
const MyName = require("../models/myModal");

exports.getIndex = (req, res, next) => {
  res.render("index", {
    pageTitle: "HOME PAGE",
    name: Names
  });
};

exports.getMyName = (req, res, next) => {
  res.render("index", {
    pageTitle: "My Name",
    name: MyName
  });
};
