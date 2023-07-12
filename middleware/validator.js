const createValidator = (req,res,next) =>{
    

    if(!req.body){
        

        return res.json({
            successful: false,
            error: {text :['text is required'] } });
    }
    next();
};

module.exports = createValidator;