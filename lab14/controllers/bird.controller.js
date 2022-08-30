const path = require('path');
const Birds = require('../models/bird.model');

exports.getBird = (req, res, next) => {
    
    console.log(req.cookies);

    res.render(path.join('bird', 'birds.ejs'), {
    });
};

exports.postBird = (req, res, next) => {

    const aBird = new Birds(bird_URL);
    aBird.save();

    req.session.ultimo_Birds = aBird;

    res.cookie("numero_clicks" , numero_clicks, {
        httpOnly: true,
    });

    console.log(req.cookies);
    console.log(req.body);

    res.render(path.join('bird', 'birds.ejs'), {
        Birds: aBird.nombre, 
        yourBirds: Birds.fetchAll(),
        clicks: numero_clicks,
    });
};