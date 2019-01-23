class Redacted {
  constructor(selector, options) {
    this.elements = document.querySelectorAll(selector);
    this.options = options;
    this.createStyleNode();
  } 

  createStyleNode() {
    const head = document.head || document.getElementsByTagName('head')[0];

    const specialStyle = '.__redacted__ {position: relative;white-space: pre;}.__redacted__:after {background: black;border-radius: 0.1em;box-shadow: 0 0 1px rgba(0, 0, 0, 0.35);content: " ";width: 100%;height: 1em;left: 0;top: 0;position: absolute;}';

    const styleEl = document.createElement('style');
    styleEl.type = 'text/css';

    const textEl = document.createTextNode(specialStyle);

    styleEl.appendChild(textEl);

    head.appendChild(styleEl);
  }

  censor() {
    this.elements.forEach((element) => {
      element.classList.add('__redacted__');
      element.setAttribute('title', 'REDACTED');
      element.onclick = (e) => {
        e.target.removeAttribute('title');
        e.target.classList.remove('__redacted__');
      };
    });
  }
}

window.Redacted = Redacted;