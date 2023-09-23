const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    text: {
        type: String,
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    }
}, { strict: false }, { timestamps: true })



module.exports = mongoose.model("comment", commentSchema);