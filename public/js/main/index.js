import loadScripts from '../utils/loadScripts';
import IndexController from './IndexController';

loadScripts(polyfillsNeeded, function() {
  new IndexController(document.querySelector('.main'));
});