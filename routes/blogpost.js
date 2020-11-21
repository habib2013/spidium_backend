const express = require("express");
const router = express.Router();
const BlogPost = require("../models/blogpost.model");
const User = require("../models/users.model");
const middleware = require("../middleware");

const multer  = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, req.params.id +  ".jpg");
  },
});


const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 6,
  },

});

  router.route('/add/coverImage/:id').patch(middleware.checkToken,upload.single("img"),(req,res) => {
    BlogPost.findOneAndUpdate({_id: req.params.id},{
      $set: {
        coverImage: req.file.path
      },

    },
    {new: true},(err,result) => {
        if(err) return res.json(err);
        return res.json(result);


    }
    )
  });

  router
  .route("/add/coverImage")
  .patch(middleware.checkToken, upload.single("img"), (req, res) => {
    BlogPost.findOneAndUpdate(
      { username: req.decoded.username },
      {
        $set: {
          coverImage: req.file.path,
        },
      },
           (err, blogposts) => {
        if (err) return res.status(500).send(err);
        const response = {
          message: "Cover image added successfully updated",
          data: blogposts,
        };
        return res.status(200).send(response);
      }
    );
  });

router.route("/Add").post(middleware.checkToken, (req, res) => {
  const blogpost = BlogPost({
    username: req.decoded.username,
    title: req.body.title,
    body: req.body.body,  

    readTime: req.body.readTime,
    datePublished: req.body.datePublished,
    category: req.body.category
  });
  
  blogpost.save().then((result) => {
    res.json({ data: result }).catch((err) => {
      console.log(err), res.json({ err: err });
    });
  });
});

router.route('/getOwnBlog').get(middleware.checkToken,(req,res) => {
BlogPost.find({username: req.decoded.username},(err,result) => 
{
if(err) return res.json(err);
return res.json({data: result});
})
});

router.route('/getOtherBlog').get(middleware.checkToken,(req,res) => {
  BlogPost.find({username: {$ne: req.decoded.username}},(err,result) => 
  {
  if(err) return res.json(err);
  return res.json({data: result});
  })
  });

  router.route('/delete/:id').delete(middleware.checkToken,(req,res) => {
      BlogPost.findOneAndDelete(
        {$and: [{_id: req.params.id},{username: req.params.username}] }
        ,(err,result) => {
        if(err) return res.json(err);
       else if(result){
         console.log(result);
         return res.json("Blog post deleted")
        }
        return res.json("Blog post not deleted")
      })
  });

  router.route('/:blogId').get(middleware.checkToken,(req,res) => {
    BlogPost.findOne({_id: req.params.blogId},(err,result) => {
      if(err) return res.status(400).send({success: false, err})
       return res.status(200).json({success: true,data: result})
    })

  });

  router.route('/like').put(middleware.checkToken,(req,res) => {
 
     const userId = User.findOne({username: req.decoded.username},(err,result) => {
        if(err){
          return res.status(400).json({success:false,error: err})
        }
      return res.status(200).json(result['_id'])
     })
    //  var  newUserId = userId.toString();
    console.log(userId)

    // BlogPost.findByIdAndUpdate(req.body.postId,{
    //   $push: {likes: '5fb91cb79b57bb28788bae58'}
    // },{
    //   new: true
    // }
      
    //   ).exec((err,result) => {
    //     if(err) {
    //       return res.status(422).json({'error': err})
    //     }
    //     else {
    //       res.json({success: true, data:result})
    //     }
    //   })
  })


  router.route('/dislike').put(middleware.checkToken,(req,res) => {
    console.log(req.decoded.username);
    BlogPost.findByIdAndUpdate(req.body.postId,{
      $pull: {likes: req.decoded._id}
      
    },{
      new: true
    }
      
      ).exec((err,result) => {
        if(err) {
          return res.status(422).json({'error': er})
        }
        else {
          res.json(result)
        }
      })
  })

module.exports = router;
