
//-------------------------------------------------------------------------------------------------------------------------------------
//EXPORTS
module.exports = {
  
    index:  async (req, res) => {
        
        // const posts = await Post.find();
        // const categories = await Category.find();
        
        res.render('default/index', { title: 'Homepage' });
    },

    loginGet: (req, res) => {
        res.render('default/login', { title: 'Login' });
    },

    loginPost: (req, res) => {
        res.send('You have successfully submitted data.');
    },

    registerGet: (req, res) => {
        res.render('default/register', { title: 'Register' });
    },

    registerPost: (req, res) => {
        res.send("You have successfully created an account.");
    },


    
    // loginGet: (req, res) => {
    //     res.render('default/login');
    // },
    
    // loginPost: (req, res) => {
    //   res.send("Congratulations, you've successfully submitted the data.");  
    // },
    
    // registerGet: (req, res) => {
    //     res.render('default/register');
    // },
    
    // registerPost: (req, res ) => {
    //     res.send("Successfully Registered.");
    // }
    
};