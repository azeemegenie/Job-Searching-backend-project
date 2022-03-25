const Service = require("../Models/Service");

const sendApiResponse = require("../utilities/sendApiResponse");

const getServices = async (req, res) => {
  try {
    let services = await Service.find();

    sendApiResponse(res, services, 200, "");
  } catch (error) {
    sendApiResponse(res, [], 500, "Something went wrong!");
  }
};

const getService = async (req, res) => {
  const { id } = req.params;
  const user = req.user;

  try {
    let service = await Service.findOne({ _id: id });
    if (service) {
      sendApiResponse(res, service, 200, "");
    } else {
      sendApiResponse(res, [], 500, "Service not found.");
    }
  } catch (error) {
    sendApiResponse(res, [], 500, "Something went wrong.");
  }
};

const addService = async (req, res) => {
  const { id, serviceName, serviceDescription, slug, tierData } = req.body;
  try {
    let service = new Service({
      id,
      serviceName,
      serviceDescription,
      slug,
      tierData
    });
    service = await service.save();
    if (service) {
      sendApiResponse(res, service, 200, "");
    } else {
      sendApiResponse(res, [], 500, "Service not found.");
    }
  } catch (error) {
    sendApiResponse(res, [], 500, "Something went wrong.");
  }
};

module.exports = {
  getServices,
  getService,
  addService,
};
