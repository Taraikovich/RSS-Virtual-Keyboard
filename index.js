import {keyboardLayoutRu} from '/ruKeys.js';
import {keyboardLayoutEn} from '/enKeys.js';
import {Keyboard} from '/keybord.js';


const keyboardEn = new Keyboard(keyboardLayoutEn);
keyboardEn.mount();

const keyboardRu = new Keyboard(keyboardLayoutRu);
keyboardRu.mount();








