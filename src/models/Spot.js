const mogoose = require("mongoose");

const SpotSchema = new mogoose.Schema({ 
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mogoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mogoose.model("Spot", SpotSchema);