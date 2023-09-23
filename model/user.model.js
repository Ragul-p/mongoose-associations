const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
}, { strict: false }, { timestamps: true })



module.exports = mongoose.model("user", userSchema);