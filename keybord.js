export class Keyboard {
    constructor(layout) {
        this.layout = layout;
        this.container = document.createElement('div');
        this.container.className = 'keyboard';

        for (let key in layout) {
            let button = document.createElement('button');
            button.className = 'keyboard__btn'
            if (key === 'Backspace') button.classList.add('keyboard__btn_backspace');
            if (key === 'Tab') button.classList.add('keyboard__btn_tab');
            if (key === 'Delete') button.classList.add('keyboard__btn_delete');
            if (key === 'CapsLock') button.classList.add('keyboard__btn_caps');
            if (key === 'Enter') button.classList.add('keyboard__btn_enter');
            if (key === 'ShiftLeft') button.classList.add('keyboard__btn_lshift');
            if (key === 'ArrowUp') button.classList.add('keyboard__btn_up');
            if (key === 'ShiftRight') button.classList.add('keyboard__btn_rshift');
            if (key === 'ControlLeft') button.classList.add('keyboard__btn_lctrl');
            if (key === 'MetaLeft') button.classList.add('keyboard__btn_win');
            if (key === 'AltLeft') button.classList.add('keyboard__btn_lalt');
            if (key === 'Space') button.classList.add('keyboard__btn_space');
            if (key === 'AltRight') button.classList.add('keyboard__btn_ralt');
            if (key === 'ControlRight') button.classList.add('keyboard__btn_rctrl');
            if (key === 'ArrowLeft') button.classList.add('keyboard__btn_left');
            if (key === 'ArrowDown') button.classList.add('keyboard__btn_down');
            if (key === 'ArrowRight') button.classList.add('keyboard__btn_right');
            button.innerText = layout[key];
            this.container.appendChild(button);
        }
    }

    mount() {
        document.body.appendChild(this.container);
    }

    unmount() {
        document.body.removeChild(this.container);
    }
}