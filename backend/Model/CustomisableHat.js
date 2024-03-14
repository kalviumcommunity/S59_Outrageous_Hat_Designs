const mongoose = require("mongoose");

const CustomisableSchema = new mongoose.Schema({
    creator:{type: String,
        // required: true
    },
    design_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("CustomisableHat", CustomisableSchema);
