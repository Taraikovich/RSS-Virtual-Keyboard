export class Keyboard {
    constructor(layout) {
        this.layout = layout;
        this.container = document.createElement('div');
        this.container.className = 'keyboard';

        let header = document.createElement('h1');
        header.className = 'keyboard__h1';
        header.innerText = 'RSS Virtual Keyboard';
        this.container.appendChild(header);

        let teaxArea = document.createElement('textarea');
        teaxArea.className = 'keyboard__input';
        this.container.appendChild(teaxArea);

        for (let key in layout) {
            let button = document.createElement('button');
            button.className = 'keyboard__btn'
            if (key.includes('Key') || 
                key.includes('Digit') ||
                key.includes('Minus') ||
                key.includes('Equal') ||
                key.includes('Bracket') ||
                key.includes('slash') ||
                key.includes('Semicolon') ||
                key.includes('Quote') ||
                key.includes('Comma') ||
                key.includes('Period') ||
                key.includes('Slash')) button.classList.add('keyboard__btn_text');
            if (key === 'Backspace') button.classList.add('keyboard__btn_backspace');
            if (key === 'Tab') button.classList.add('keyboard__btn_tab');
            if (key === 'CapsLock') button.classList.add('keyboard__btn_caps');
            if (key === 'Enter') button.classList.add('keyboard__btn_enter');
            if (key === 'ShiftLeft') button.classList.add('keyboard__btn_lshift');
            if (key === 'ShiftRight') button.classList.add('keyboard__btn_rshift');
            if (key === 'Space') button.classList.add('keyboard__btn_space');
            if (key === 'ControlRight') button.classList.add('keyboard__btn_rctrl');
            if (key === 'ArrowDown') button.classList.add('keyboard__btn_down');
            button.innerText = layout[key];
            this.container.appendChild(button);
        }

        let guid = document.createElement('p');
        guid.innerText = 'The keyboard was created in the Windows operating system\nTo switch the language combination: left ctrl + alt';
        this.container.appendChild(guid);
    }

    mount() {
        document.body.appendChild(this.container);
    }

    unmount() {
        document.body.removeChild(this.container);
    }
}