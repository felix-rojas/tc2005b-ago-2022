const arrayExample = [];

module.exports = class Winner {
    constructor(name_to_assign){
        this.name = name_to_assign;
    }
    save(){
        arrayExample.push(this);
    }
    // returns all objects of the Class
    // static methods are run on the class, not on the instances
    static fetchAll() {
        return arrayExample;
    }
}