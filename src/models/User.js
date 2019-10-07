const mogoose = require("mongoose");

const UserSchema = new mogoose.Schema({ 
    email: String,
});

module.exports = mogoose.model("User", UserSchema);