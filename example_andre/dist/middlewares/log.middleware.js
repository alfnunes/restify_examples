"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (req, res, next) {
    console.log("Entrou Request " + req);
    return next();
};