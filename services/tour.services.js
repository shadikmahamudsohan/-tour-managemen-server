const Tour = require("../models/Tour");

exports.getTourService = async (query) => {
    console.log(query);
    const result = await Tour.find({
        $or: [
            { name: query?.name },
            { description: query?.description },
            { img: query?.img },
            { price: query?.price },
        ]
    });
    return result;
};


exports.getToursByIdService = async (id) => {
    const result = await Tour.find({ _id: id });
    return result;
};

exports.createTourService = async (data) => {
    console.log(data);
    const result = await Tour.create(data);
    return result;
};