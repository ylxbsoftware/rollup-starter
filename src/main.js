import {version} from '../package.json';

document.body.innerHTML = version;

export default (name) => {
  console.log(`${name}`)
}


