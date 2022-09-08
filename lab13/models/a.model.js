const arrayNames = [];

module.exports = class miListaNombres {
    constructor(name_to_assign){
        this.name = name_to_assign;
    }
    save(){
        arrayNames.push(this);
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