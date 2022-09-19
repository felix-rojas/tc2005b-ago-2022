const path = require('path');
const Birds = require('../models/bird.model');

exports.getBird = (request, response, next) => {
    
    console.log(request.cookies);

    response.render(path.join('bird', 'birds.ejs'), {
    });
};

exports.postBird = (request, response, next) => {

    const aBird = new Birds(bird_URL);
    aBird.save();

    request.session.ultimo_Birds = aBird;

    response.cookie("numero_clicks" , numero_clicks, {
        httpOnly: true,
    });

    console.log(request.cookies);
    console.log(request.body);

    response.render(path.join('bird', 'birds.ejs'), {
        Birds: aBird.nombre, 
        yourBirds: Birds.fetchAll(),
        clicks: numero_clicks,
    });
};
