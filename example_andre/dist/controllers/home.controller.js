"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var index = function index(req, res, next) {
    res.send("Bem vindo " + req.params.name + " Home Page");
    next();
};

var remove = function remove(req, res, next) {
    res.send("Bem vindo " + req.params.id + " Home Page");
    next();
};

exports.default = {
    index: index,
    remove: remove
};