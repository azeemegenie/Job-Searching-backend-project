const db = require("../db");

const schema = new db.Schema(
  {
    id: {
      type: Number,
      required: false
    },
    serviceName: {
      type: String,
      required: false
    },
    serviceDescription: {
      type: String,
      required: false
    },
    slug: {
      type: String,
      required: false
    },
    serviceName: {
      type: String,
      required: false
    },
    tierData: [
      {
        tierDescription: String,
        tierName: String,
        price: String
      }
    ]
  },
  { timestamps: true }
);

module.exports = db.model("services", schema);
