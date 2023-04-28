import { keyboardLayoutRu } from './ruKeys.js';
import keyboardLayoutEn from './enKeys.js';
import Keyboard from './keybord.js';

const keyboardEn = new Keyboard(keyboardLayoutEn);
keyboardEn.mount();

const keyboardRu = new Keyboard(keyboardLayoutRu);

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  document.getElementById(e.code).dispatchEvent(new Event('mousedown'));
});

document.addEventListener('keyup', (e) => {
  e.preventDefault();
  document.getElementById(e.code).dispatchEvent(new Event('mouseup'));
});

// document.addEventListener('keydown', function(event) {
//   if (event.keyCode === 9) {
//     event.preventDefault();
//   }
// });



