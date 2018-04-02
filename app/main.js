//main.js
/*const greeter = require('./Greeter.js');
document.querySelector('#root').appendChild(greeter());*/

import greeter from './Greeter';

import './main.css'; // 使用 require 导入 css 文件

let content = greeter();
document.querySelector('#root').appendChild(content);
