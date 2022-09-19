const mongoose = require('mongoose');

//schema design
const toursSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the tour name"],
        trim: true,
        unique: [true, "tour name already exists"],
    },
    description: {
        type: String,
        required: [true, "Please enter the tour description"],
    },
    img: {
        type: String,
        required: [true, "Please enter the tour destination image"],
    },
    price: {
        type: Number,
        required: [true, "Please enter the tour price"],
        min: [0, "tour price must be greater than 0"],
    },
    view: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true
});


toursSchema.methods.logger = function () {
    console.log(`data saved for: ${this.name}`);
};

const Tour = mongoose.model("tours-collection", toursSchema);

toursSchema.methods.logger = function () {
    console.log(`Data saved for ${this.name}`);
};

module.exports = Tour;