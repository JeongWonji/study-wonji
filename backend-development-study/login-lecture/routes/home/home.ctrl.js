'use strict'

const hello = (req, res) => {
    res.render("../../views/home/index");
};

const login = (req, res) => {
    res.render("../../views/home/login");
};

module.exports = {
    hello,
    login
};