const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    post: {
        type: String,
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
}, { strict: false }, { timestamps: true })



module.exports = mongoose.model("post", userSchema);