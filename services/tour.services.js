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
    try {
        console.log(id);
        const updateView = await Tour.findOneAndUpdate({ _id: id }, { $inc: { view: 1 } });
        console.log(updateView);
        const result = await Tour.find({ _id: id });
        return result;

    } catch (error) {
        return `${id} don't match`;
    }
};

exports.createTourService = async (data) => {
    const result = await Tour.create({ ...data, view: 0 });
    return result;
};


exports.getTrendingService = async () => {
    console.log("in trending service");
    const result = await Tour.find({ view: { $gt: 3 } });
    return result;
};