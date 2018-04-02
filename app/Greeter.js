// Greeter.js

// v1
/*module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = 'Hi there and greetings!';
    return greet;
};*/

// v2
/*var config = require('./config.json');

module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};*/

// v3
import config from './config.json';
import styles from './Greeter.css';

function greeter() {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    greet.className = styles.root;
    return greet;
}

export default greeter;
