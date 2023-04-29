export default class Keyboard {
  constructor(layout) {
    this.layout = layout;
    this.container = document.createElement('div');
    this.container.className = 'keyboard';

    this.header = document.createElement('h1');
    this.header.className = 'keyboard__h1';
    this.header.innerText = 'RSS Virtual Keyboard';
    this.container.appendChild(this.header);

    this.teaxArea = document.createElement('textarea');
    this.teaxArea.id = 'teaxArea';
    this.teaxArea.className = 'keyboard__input';
    this.container.appendChild(this.teaxArea);

    Object.keys(layout).forEach((key) => {
      this.button = document.createElement('button');
      this.button.className = 'keyboard__btn';
      this.button.id = key;
      if (
        key.includes('Key') ||
        key.includes('Digit') ||
        key.includes('Minus') ||
        key.includes('Equal') ||
        key.includes('Bracket') ||
        key.includes('slash') ||
        key.includes('Semicolon') ||
        key.includes('Quote') ||
        key.includes('Comma') ||
        key.includes('Period') ||
        key.includes('Slash')
      )
        this.button.classList.add('keyboard__btn_text');
      if (key === 'Backspace')
        this.button.classList.add('keyboard__btn_backspace');
      if (key === 'Tab') this.button.classList.add('keyboard__btn_tab');
      if (key === 'CapsLock') this.button.classList.add('keyboard__btn_caps');
      if (key === 'Enter') this.button.classList.add('keyboard__btn_enter');
      if (key === 'ShiftLeft') {
        this.button.classList.add('keyboard__btn_lshift');
        this.button.addEventListener('mousedown', this.shift.bind(this));
        this.button.addEventListener('mouseup', this.shift.bind(this));
      }
      if (key === 'ShiftRight')
        this.button.classList.add('keyboard__btn_rshift');
      if (key === 'Space') this.button.classList.add('keyboard__btn_space');
      if (key === 'ControlRight')
        this.button.classList.add('keyboard__btn_rctrl');
      if (key === 'ArrowDown') this.button.classList.add('keyboard__btn_down');
      this.button.innerText = layout[key];
      this.button.addEventListener('mouseenter', this.hoverAdd);
      this.button.addEventListener('mouseleave', this.hoverRemove);
      this.button.addEventListener('mousedown', this.activeAdd);
      this.button.addEventListener('mouseup', this.activeRemove);
      //   this.button.addEventListener('click', this.mouseClick);
      this.container.appendChild(this.button);
    });

    this.guid = document.createElement('p');
    this.guid.innerText =
      'The keyboard was created in the Windows operating system\nTo switch the language combination: left ctrl + alt';
    this.container.appendChild(this.guid);
  }

  test() {}

  switchLang(lang) {
    Object.keys(lang).forEach((key) => {
      document.getElementById(key).textContent = lang[key];
    });
  }

  //   switchLang(lang) {
  //     Object.keys(lang).forEach((key) => {
  //       document.getElementById(key).textContent = lang[key];
  //     });
  //   }

  shift() {
    this.shiftSt = !this.shiftSt;
    this.shiftKeys = Object.assign({}, this.layout);
    this.enShift = {
      '`': '~~',
      1: '!!',
      2: '@"', // "
      3: '#№', // №
      4: '$;', // ;
      5: '%%',
      6: '^:', // :
      7: '&?', // ?
      8: '**',
      9: '((',
      0: '))',
      '-': '__',
      '=': '++',
      '[': '{{',
      ']': '}}',
      ';': '::',
      "'": '""',
      ',': '<,',
      '.': '>,',
      '/': '?,', // ,
      '\\': '|/', // /  
    };
    Object.keys(this.shiftKeys).forEach((key) => {
      if (this.shiftKeys[key].length === 1)
        this.shiftKeys[key] = this.shiftKeys[key].toUpperCase();
      if (this.shiftKeys[key] in this.enShift) {
        if (this.layout.Backquote === 'ё') {
          this.shiftKeys[key] = this.enShift[this.shiftKeys[key]][1];
          this.shiftKeys.Backslash = '/';
        } else {
          this.shiftKeys[key] = this.enShift[this.shiftKeys[key]][0];
        }
      }
      if (this.shiftKeys[key] in this.enShift && this.layout.Backquote === 'ё')
        this.shiftKeys[key] = this.enShift[this.shiftKeys[key]][1];
    });
    if (this.shiftSt) {
      Object.keys(this.shiftKeys).forEach((key) => {
        document.getElementById(key).textContent = this.shiftKeys[key];
      });
    } else {
      Object.keys(this.layout).forEach((key) => {
        document.getElementById(key).textContent = this.layout[key];
      });
    }
  }

  mount() {
    document.body.appendChild(this.container);
  }

  unmount() {
    document.body.removeChild(this.container);
  }

  hoverAdd() {
    this.classList.add('keyboard__btn_hover');
  }

  hoverRemove() {
    this.classList.remove('keyboard__btn_hover');
  }

  activeAdd() {
    this.classList.add('keyboard__btn_active');
    // teaxArea.focus();
    // if (this.id === 'Tab') {
    //   let position = teaxArea.selectionStart;
    //   teaxArea.value =
    //     teaxArea.value.split('').slice(0, teaxArea.selectionStart).join('') +
    //     '    ' +
    //     teaxArea.value.split('').slice(teaxArea.selectionStart).join('');
    //   teaxArea.selectionStart = position + 4;
    //   teaxArea.selectionEnd = position + 4;
    // }
    let position = teaxArea.selectionStart;
    if (this.textContent.length === 1) {
      teaxArea.value =
        teaxArea.value.split('').slice(0, teaxArea.selectionStart).join('') +
        this.textContent +
        teaxArea.value.split('').slice(teaxArea.selectionStart).join('');
      teaxArea.selectionStart = position + 1;
      teaxArea.selectionEnd = position + 1;
    }

    if (this.id === 'Enter') {
      teaxArea.value =
        teaxArea.value.split('').slice(0, teaxArea.selectionStart).join('') +
        '\n' +
        teaxArea.value.split('').slice(teaxArea.selectionStart).join('');
      teaxArea.selectionStart = position + 1;
      teaxArea.selectionEnd = position + 1;
    }

    if (this.id === 'Tab') {
      teaxArea.value =
        teaxArea.value.split('').slice(0, teaxArea.selectionStart).join('') +
        '    ' +
        teaxArea.value.split('').slice(teaxArea.selectionStart).join('');
      teaxArea.selectionStart = position + 4;
      teaxArea.selectionEnd = position + 4;
    }

    if (this.id === 'Backspace') {
      if (teaxArea.selectionStart !== 0) {
        teaxArea.value =
          teaxArea.value
            .split('')
            .slice(0, teaxArea.selectionStart - 1)
            .join('') +
          teaxArea.value.split('').slice(teaxArea.selectionStart).join('');
        teaxArea.selectionStart = position - 1;
        teaxArea.selectionEnd = position - 1;
      }
    }

    if (this.id === 'Delete') {
      teaxArea.value =
        teaxArea.value.split('').slice(0, teaxArea.selectionStart).join('') +
        teaxArea.value
          .split('')
          .slice(teaxArea.selectionStart + 1)
          .join('');
      teaxArea.selectionStart = position;
      teaxArea.selectionEnd = position;
    }

    // if (this.id === 'ShiftLeft' || this.id === 'ShiftRight') {
    //     this.shift;
    //     console.log(this.shift);
    // }
  }

  activeRemove() {
    this.classList.remove('keyboard__btn_active');
    teaxArea.focus();
  }

  //   mouseClick() {
  //     teaxArea.focus();
  //     let position = teaxArea.selectionStart;
  //     if (this.textContent.length === 1) {
  //       teaxArea.value =
  //         teaxArea.value.split('').slice(0, teaxArea.selectionStart).join('') +
  //         this.textContent +
  //         teaxArea.value.split('').slice(teaxArea.selectionStart).join('');
  //       teaxArea.selectionStart = position + 1;
  //       teaxArea.selectionEnd = position + 1;
  //     }

  //     if (this.id === 'Enter') {
  //       teaxArea.value =
  //         teaxArea.value.split('').slice(0, teaxArea.selectionStart).join('') +
  //         '\n' +
  //         teaxArea.value.split('').slice(teaxArea.selectionStart).join('');
  //       teaxArea.selectionStart = position + 1;
  //       teaxArea.selectionEnd = position + 1;
  //     }

  //     if (this.id === 'Tab') {
  //       teaxArea.value =
  //         teaxArea.value.split('').slice(0, teaxArea.selectionStart).join('') +
  //         '    ' +
  //         teaxArea.value.split('').slice(teaxArea.selectionStart).join('');
  //       teaxArea.selectionStart = position + 4;
  //       teaxArea.selectionEnd = position + 4;
  //     }

  //     if (this.id === 'Backspace') {
  //       if (teaxArea.selectionStart !== 0) {
  //         teaxArea.value =
  //           teaxArea.value
  //             .split('')
  //             .slice(0, teaxArea.selectionStart - 1)
  //             .join('') +
  //           teaxArea.value.split('').slice(teaxArea.selectionStart).join('');
  //         teaxArea.selectionStart = position - 1;
  //         teaxArea.selectionEnd = position - 1;
  //       }
  //     }

  //     if (this.id === 'Delete') {
  //       teaxArea.value =
  //         teaxArea.value.split('').slice(0, teaxArea.selectionStart).join('') +
  //         teaxArea.value
  //           .split('')
  //           .slice(teaxArea.selectionStart + 1)
  //           .join('');
  //       teaxArea.selectionStart = position;
  //       teaxArea.selectionEnd = position;
  //     }
  //   }
}
