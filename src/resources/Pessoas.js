const { endpoint, validate } = require('fastexpress');
const database = require('../models');

const { Pessoas: Model } = database;

module.exports = endpoint(
  Model,
  {
    name: {
      validation: validate.string
    },
    email: {
      validation: validate.string
    }
  },
  database
);
