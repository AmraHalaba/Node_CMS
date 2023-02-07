//-------------------------------------------------------------------------------------------------------------------------------------
//IMPORTS
const Post = require("../models/PostModel");
const Category = require("../models/CategoryModel");

//-------------------------------------------------------------------------------------------------------------------------------------
//EXPORTS
module.exports = {
  index: async (req, res) => {
    res.render("admin/index", { title: "Dashboard" });
  },

  getPosts: (req, res) => {
    //const category = Category.find().populate('category');
    Post.find()
      .populate("category")
      .then((posts) => {
        res.render("admin/posts/index", {
          title: "All Posts",
          posts: posts,
          //categories: category
        });
      });
  },

  getPostsTEST: (req, res) => {
    Post
      .find()
      .populate('category')
      .then(post => {
        res.json(post);
      });
  },

  createPosts: (req, res) => {
    Category.find().then((cats) => {
      res.render("admin/posts/create", {
        title: "Create Post",
        categories: cats,
      });
    });
  },

  submitPosts: (req, res) => {
    //form data validation pending

    const commentsAllowed = req.body.allowComments ? true : false;

    const newPost = new Post({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      allowComments: commentsAllowed,
      category: req.body.category,
    });

    newPost.save().then((post) => {
      req.flash("success-message", "Post created successfully.");
      res.redirect("/admin/posts");
    });
  },

  editPosts: (req, res) => {
    const id = req.params.id;
    Post.findById(id).then((post) => {
      res.render("admin/posts/edit", { title: "Edit Post", post: post });
    });
  },

  deletePosts: (req, res) => {
    const id = req.params.id;
    Post.findByIdAndDelete(id).then((deletedPost) => {
      req.flash(
        "success-message",
        `Post ${deletedPost.title} deleted successfully.`
      );
      res.redirect("/admin/posts");
    });
  },

  //CATEGORIES - ALL METHODS
  getCategories: (req, res) => {
    Category.find().then((cats) => {
      res.render("admin/category/index", {
        title: "Categories",
        categories: cats,
      });
    });
  },

  createCategories: (req, res) => {
    var categoryName = req.body.name; //target the name attribute from ajax script in frontend and fetch category name

    if (categoryName) {
      const newCategory = new Category({
        title: categoryName,
      });
      newCategory.save().then((category) => {
        res.status(200).json(category);
      });
    }
  },
};
