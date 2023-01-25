
//-------------------------------------------------------------------------------------------------------------------------------------
//IMPORTS
const Post = require('../models/PostModel').Post;

//-------------------------------------------------------------------------------------------------------------------------------------
//EXPORTS
module.exports = {
  
    index:  async (req, res) => {
        res.render('admin/index', { title: 'Dashboard' });
    },

    getPosts: (req, res) => {
        res.send('All Posts');
    },    

    submitPosts: (req, res) => {
        const newPost = new Post({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
        });

        newPost.save()
            .then(post => {
                console.log(post);
                req.flash('success-message', "Post created successfully.")
                res.redirect('/admin/posts');
            });
    },

    createPosts: (req, res) => {
        res.render('admin/posts/create', {title: 'Create Post'});
    },

};