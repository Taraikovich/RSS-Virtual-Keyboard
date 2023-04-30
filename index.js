import keyboardLayoutRu from './ruKeys.js';
import keyboardLayoutEn from './enKeys.js';
import Keyboard from './keybord.js';

function mountKeyboard() {
  let lang;

  if (localStorage.getItem('lang')) {
    if (localStorage.getItem('lang') === 'en') {
      lang = keyboardLayoutEn;
    } else if (localStorage.getItem('lang') === 'ru') {
      lang = keyboardLayoutRu;
    }
  } else {
    lang = keyboardLayoutEn;
  }

  const keyboard = new Keyboard(lang);
  keyboard.mount();

  document.addEventListener('keydown', (e) => {
    if (e.code in keyboard.layout) {
      e.preventDefault();
      document.getElementById(e.code).dispatchEvent(new Event('mousedown'));
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.code in keyboard.layout) {
      e.preventDefault();
      document.getElementById(e.code).dispatchEvent(new Event('mouseup'));
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'AltLeft' && e.ctrlKey === true) {
      if (keyboard.layout === keyboardLayoutEn) {
        keyboard.switchLang(keyboardLayoutRu);
        keyboard.layout = keyboardLayoutRu;
        localStorage.setItem('lang', 'ru');
      } else if (keyboard.layout === keyboardLayoutRu) {
        keyboard.switchLang(keyboardLayoutEn);
        keyboard.layout = keyboardLayoutEn;
        localStorage.setItem('lang', 'en');
      }
    }
  });
}

mountKeyboard();
