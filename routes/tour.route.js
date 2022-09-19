const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tour.controllers');

router.route('/')
    .get(tourController.getTours)
    .post(tourController.createTour);

router.route('/trending')
    .get(tourController.getTrending);

router.route('/cheapest')
    .get(tourController.getCheapest);

router.route('/:id')
    .get(tourController.getToursById)
    .patch(tourController.updateTour);


module.exports = router;