const path = require('path');
const Ganador = require('../models/bird.model');

exports.getBird = (req, res, next) => {
    
    console.log(req.cookies);

    const numero_clicks = req.cookies.numero_clicks ? req.cookies.numero_clicks : 0;

    const ultimo_ganador = req.session.ultimo_ganador ? req.session.ultimo_ganador : false;

    res.render(path.join('paul', 'trivia.ejs'), {
        clicks: req.cookies.numero_clicks ? req.cookies.numero_clicks : numero_clicks,
        ultimo_ganador: ultimo_ganador,
    });
};

exports.postBird = (req, res, next) => {

    let nombreGanador = '';
    if (Math.floor(Math.random() * 2) == 0) {
        nombreGanador = req.body.visitante;
    } else {
        nombreGanador = req.body.local;
    }

    const unGanador = new Ganador(nombreGanador);
    unGanador.save();

    req.session.ultimo_ganador = unGanador;

    const numero_clicks = req.cookies.numero_clicks ? Number(req.cookies.numero_clicks) + 1 : 1;
    
    res.cookie("numero_clicks" , numero_clicks, {
        httpOnly: true,
    });

    console.log(req.cookies);
    console.log(req.body);

    res.render(path.join('paul', 'ganador.ejs'), {
        ganador: unGanador.nombre, 
        ganadores: Ganador.fetchAll(),
        clicks: numero_clicks,
    });
};