//EXPORTS
module.exports = {
    mongoDbUrl: 'mongodb+srv://fluff:1111@cms.lquul3i.mongodb.net/?retryWrites=true&w=majority',
    PORT: process.env.PORT || 3000,
    globalVariables: (req, res, next) => {
        res.locals.success_message = req.flash('success-message');
        res.locals.error_message = req.flash('error-message');

        next();
    }
};