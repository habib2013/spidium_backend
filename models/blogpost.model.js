const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema.Types;

const BlogPost = Schema({
  username: String,
  title: String,
  body: String,

  readTime: String,
  datePublished: String,
  category: String,

  coverImage: {
    type: String,
    default: "",
  },
  likes: [{ type: Schema.Types.ObjectId,
    ref: 'User'}],
  share: {type:Number,default: 0},
  comment: {type:Number,default: 0},
});

module.exports = mongoose.model("BlogPost", BlogPost);
