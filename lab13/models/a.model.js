let arrayNames = [];

module.exports = class miListaNombres {
    constructor(creation_date){
        this.date = creation_date;
    }
    save(a_string){
        arrayNames.push(a_string);
    }
    // returns all objects of the Class
    // static methods are run on the class, not on the instances
    static fetchAll() {
        return arrayNames;
    }
    static fetchOne(a_number) {
        return arrayNames[a_number];
    }
}