const Tour = require("../models/Tour");

exports.getTourService = async () => {
    const result = await Tour.find();
    return result;
};

exports.createTourService = async (data) => {
    console.log(data);
    const result = await Tour.create(data);
    return result;
};