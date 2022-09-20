const Tour = require("../models/Tour");

exports.getTourService = async (query) => {
    const { page = 1, limit = 10 } = query;
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const queries = {};

    if (query.sort) {
        const sortBy = query.sort.split(',').join(" ");
        queries.sortBy = sortBy;
    }

    if (query?.name || query?.description || query?.img || query?.price) {
        const result = await Tour.find({
            $or: [
                { name: query?.name },
                { description: query?.description },
                { img: query?.img },
                { price: query?.price },
            ]
        })
            .skip(skip).limit(parseInt(limit)).sort(queries?.sortBy);
        return result;
    }
    else if (query?.sort) {
        const result = await Tour.find({}).sort(queries.sortBy);
        return result;
    }
    else {
        const result = await Tour.find({})
            .skip(skip).limit(limit);
        return result;
    }
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

exports.getCheapestService = async () => {
    console.log("in trending service");
    const result = await Tour.find({}).sort({ price: 1 }).limit(3);
    return result;
};

exports.updateTourService = async (id, data) => {
    const { name, description, img, price } = data;
    if (name || description || img || price) {
        console.log(name, description, img, price);
        const result = await Tour.updateOne({ _id: id }, { $set: data }, {
            runValidators: true
        });
        return result;
    } else {
        return `you can only update name, description, img, price, view`;
    }
};
