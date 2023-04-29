import keyboardLayoutRu from './ruKeys.js';
import keyboardLayoutEn from './enKeys.js';
import Keyboard from './keybord.js';



let lang = keyboardLayoutEn;
const keyboardEn = new Keyboard(lang);
keyboardEn.mount();

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  document.getElementById(e.code).dispatchEvent(new Event('mousedown'));
});

document.addEventListener('keyup', (e) => {
  e.preventDefault();
  document.getElementById(e.code).dispatchEvent(new Event('mouseup'));
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'AltLeft' && e.ctrlKey === true) {
    if (keyboardEn.layout === keyboardLayoutEn) {
      keyboardEn.switchLang(keyboardLayoutRu);
      keyboardEn.layout = keyboardLayoutRu;
    } else if (keyboardEn.layout === keyboardLayoutRu) {
      keyboardEn.switchLang(keyboardLayoutEn);
      keyboardEn.layout = keyboardLayoutEn;
    }
  }
});

// keyboardEn.shift()
