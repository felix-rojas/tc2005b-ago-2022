const birdArray = [
    'grey-crown',
    'hummingbird',
    'peacock',
    'puffin',
    'pigeon',
    'sea-eagle',
    'shoebill',
    'turaco',
    'white-tail',
]

const userBirds = [];

module.exports = class Birds {
    constructor(a_bird_URL) {
        this.bird_URL = a_bird_URL;
    }
    save() {
        userBirds.push(this);
    }
    static fetchAll() {
        return userBirds;
    }
}