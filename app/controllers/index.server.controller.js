exports.main = function(req,res) {

    if(!req.user){
        return res.redirect('/signin');
    }

    res.render('index', {title : 'First Title'});
}