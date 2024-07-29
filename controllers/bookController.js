"use strict";
/* -------------------------------------------------------
    EXPRESSJS - LIBRARY Project with Sequelize
------------------------------------------------------- */

const Book = require("../models/bookModel");

module.exports = {
  list: async (req, res) => {
    const data = await Book.findAndCountAll();

    res.status(200).send({
      error: false,
      result: data,
    });
  },

  create: async (req, res) => {
    const data = await Book.create(req.body);
    res.status(201).send({
      error: false,
      result: data,
    });
  },

  read: async (req, res) => {
    const data = await Book.findByPk(req.params.id);

    res.status(200).send({
      error: false,
      result: data,
    });
  },
  update: async (req, res) => {
    const data = await Book.update(req.body, { where: { id: req.params.id } });
    console.log(data)

    res.status(202).send({
      erroe: false,
      result: data,
      message: (data[0] >= 1 ? 'Updated' : 'Not Updated') + ' successfully',
      new: await Book.findByPk(req.params.id)
    });
  },

  delete: async(req,res) => {
    const data = await Book.destroy({where:{id:req.params.id}})

    if (data >= 1) {
        res.sendStatus(204)
    }else{
        res.errorStatusCode = 404
        throw new Error('Can not Deleted.')
    }
  }
};
