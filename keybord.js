export class Keyboard {
    constructor(layout) {
        this.layout = layout;
        this.container = document.createElement('div');
        this.container.className = 'keyboard';

        this.header = document.createElement('h1');
        this.header.className = 'keyboard__h1';
        this.header.innerText = 'RSS Virtual Keyboard';
        this.container.appendChild(this.header);

        this.teaxArea = document.createElement('textarea');
        this.teaxArea.className = 'keyboard__input';
        this.container.appendChild(this.teaxArea);

        for (let key in layout) {
            this.button = document.createElement('button');
            this.button.className = 'keyboard__btn'
            this.button.id = key;
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
                key.includes('Slash')) this.button.classList.add('keyboard__btn_text');
            if (key === 'Backspace') this.button.classList.add('keyboard__btn_backspace');
            if (key === 'Tab') this.button.classList.add('keyboard__btn_tab');
            if (key === 'CapsLock') this.button.classList.add('keyboard__btn_caps');
            if (key === 'Enter') this.button.classList.add('keyboard__btn_enter');
            if (key === 'ShiftLeft') this.button.classList.add('keyboard__btn_lshift');
            if (key === 'ShiftRight') this.button.classList.add('keyboard__btn_rshift');
            if (key === 'Space') this.button.classList.add('keyboard__btn_space');
            if (key === 'ControlRight') this.button.classList.add('keyboard__btn_rctrl');
            if (key === 'ArrowDown') this.button.classList.add('keyboard__btn_down');
            this.button.innerText = layout[key];
            this.button.addEventListener('mouseenter', this.hover);
            this.button.addEventListener('mouseleave', this.hover);
            this.button.addEventListener('mousedown', this.active);
            this.button.addEventListener('mouseup', this.active);
            this.container.appendChild(this.button);
        }

        this.guid = document.createElement('p');
        this.guid.innerText = 'The keyboard was created in the Windows operating system\nTo switch the language combination: left ctrl + alt';
        this.container.appendChild(this.guid);
    }

    mount() {
        document.body.appendChild(this.container);
    }

    unmount() {
        document.body.removeChild(this.container);
    }

    hover(e) {
        document.getElementById(e.target.id).classList.toggle('keyboard__btn_hover');
    }

    active(e) {
        document.getElementById(e.target.id).classList.toggle('keyboard__btn_active');
    }


}