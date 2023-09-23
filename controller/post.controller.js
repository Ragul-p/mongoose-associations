const User = require("../model/user.model");
const Post = require("../model/post.model")
const Comment = require("../model/comment.model")



async function createPost(req, res) {

    // const user = await User.create({ username: "ragul", email: "ragul@gamil.com" });

    // const post = await Post.create({
    //     title: "post 1",
    //     post: "post first ...",
    //     author: user
    // })


    const user2 = await User.create({ username: "ram", email: "ram@gamil.com" });
    const postfind = await Post.findOne({ title: "post 1" });
    const comment = Comment.create({
        text: "post 1 comment user 2...",
        author: user2._id,
        post: postfind._id
    })

    return res.status(200).json({ message: "create" })
}

async function readPost(req, res) {

    const user = await Post.findOne().populate("author");
    const comment = await Comment.find({ author: user.author.id })

    return res.status(200).json({ user, comment })
}



module.exports = { createPost, readPost }
