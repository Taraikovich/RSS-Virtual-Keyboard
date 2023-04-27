import {keyboardLayoutRu} from '/ruKeys.js';
import {keyboardLayoutEn} from '/enKeys.js';
import {Keyboard} from '/keybord.js';


const keyboardEn = new Keyboard(keyboardLayoutEn);
keyboardEn.mount();

const keyboardRu = new Keyboard(keyboardLayoutRu);

document.addEventListener('keydown', (e) => {
    document.getElementById(e.code).dispatchEvent(new MouseEvent('mousedown'));
});

document.addEventListener('keyup', (e) => {
    document.getElementById(e.code).dispatchEvent(new MouseEvent('mouseup'));
});








