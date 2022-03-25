const db = require("../db");

const schema = new db.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    payment: {
      type: String,
      required: true,
    },
    card: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
    },
    expiration: {
      type: String,
      required: true,
    },
    CVV: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = db.model("purchases", schema);
