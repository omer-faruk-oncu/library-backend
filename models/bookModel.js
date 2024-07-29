"use strict";
/* -------------------------------------------------------
    EXPRESSJS - LIBRARY Project with Sequelize
------------------------------------------------------- */

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "sqlite:" + (process.env.SQLITE || "./db.sqlite3")
);

const Book = sequelize.define("books", {
  title: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  ISBN: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  publicationYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

sequelize.sync();

sequelize
  .authenticate()
  .then(() => console.log("*DB Connected*"))
  .catch(() => console.log("*DB Not Connected*"));

module.exports = Book;
