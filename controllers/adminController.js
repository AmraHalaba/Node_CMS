
//-------------------------------------------------------------------------------------------------------------------------------------
//IMPORTS
const Post = require('../models/PostModel');

//-------------------------------------------------------------------------------------------------------------------------------------
//EXPORTS
module.exports = {
  
    index:  async (req, res) => {
        res.render('admin/index', { title: 'Dashboard' });
    },

    getPosts: (req, res) => {
        Post.find()
            .then(posts => {
                res.render("admin/posts/index", { title: "All Posts", posts: posts });
            });
    },    

    submitPosts: (req, res) => {

        //form data validation pending


        const newPost = new Post({
          title: req.body.title,
          description: req.body.description,
          status: req.body.status,
          allowComments: req.body.allowComments,
        });

        newPost.save()
            .then(post => {
                console.log(post);
                req.flash('success-message', "Post created successfully.")
                res.redirect('/admin');
            });
    },

    createPosts: (req, res) => {
        res.render('admin/posts/create', {title: 'Create Post'});
    },

    editPosts: (req, res) => {
        const id = req.params.id;
        Post.findById(id)
            .then(post => {
                res.render("admin/posts/edit", { title: "Edit Post", post: post });
            });
    },

};