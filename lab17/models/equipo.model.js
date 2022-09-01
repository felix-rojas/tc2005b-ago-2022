const db = require('../utils/database');

module.exports = class Equipo {
    constructor(un_nombre) {
        this.nombre = un_nombre;
    }
    
    save(){

    }

    static fetchAll() {
        db.execute ('SELECT * FROM equipos')
        .then (([rows, fieldData]) => {
            console.log(rows);
        })
        .catch(err => {
            console.log(err);
        });
    }
}