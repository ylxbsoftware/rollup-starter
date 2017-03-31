import {version} from '../package.json';
import './main.css';
import a from './index.js';

console.log($('body').length);
document.write(
     '<script src="http://' + (location.host || 'localhost').split(':')[0] +
     ':35729/livereload.js?snipver=1"></script>');

document.body.innerHTML = version;

export default (name) => {
  console.log(`${name}`)
}


