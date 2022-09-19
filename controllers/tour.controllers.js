const servers = require('../services/tour.services');


exports.getTours = async (req, res, next) => {
    try {
        const result = await servers.getTourService(req.query);

        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data",
            error: error.message,
        });
    }
};


exports.getToursById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await servers.getToursByIdService(id);

        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: `can't find the data by id: ${id}`,
            error: error.message,
        });
    }
};

exports.getTrending = async (req, res, next) => {
    try {
        const result = await servers.getTrendingService();

        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: `can't find the data by id: ${id}`,
            error: error.message,
        });
    }
};

exports.getCheapest = async (req, res, next) => {
    try {
        const result = await servers.getCheapestService();

        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: `can't find the data by id: ${id}`,
            error: error.message,
        });
    }
};

exports.createTour = async (req, res, next) => {
    try {
        const tour = await servers.createTourService(req.body);

        console.log('tour:', tour);

        tour.logger();

        const result = await tour.save();

        res.status(200).json({
            message: "success",
            message: 'Data inserted successfully',
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Data is not inserted",
            error: error.message
        });
    }
};

exports.updateTour = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await servers.updateTourService(id, req.body);

        if (result) {
            res.status(200).json({
                status: "success",
                message: result
            });
        }
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Couldn't update the product",
            error: error.message
        });
    }
};
