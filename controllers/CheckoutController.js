const Purchase = require("../Models/Purchase");
const sendApiResponse = require("../utilities/sendApiResponse");

const checkoutservice = async (req, res) => {
  const { firstName, lastName, email, country, state, zip, payment, address, card, cardNumber, expiration, CVV } = req.body;
  try {
    let purchase = new Purchase({
      firstName, lastName, email, country, state, zip, payment, address, card, cardNumber, expiration, CVV
    });
    purchase = await purchase.save();
    if (purchase) {
      sendApiResponse(res, purchase, 200, "Form Submitted Sucessfully");
    } else {
      sendApiResponse(res, [], 500, "Error while submitting form");
    }
  } catch (error) {
    sendApiResponse(res, [], 500, "Error while submitting form");
  }
};

module.exports = {
  checkoutservice
};
