export default class Redacted {
  constructor(selector, options) {
    this.elements = document.querySelectorAll(selector);
    this.options = options;
    this.createStyleNode();
  } 

  createStyleNode() {
    const head = document.head || document.getElementsByTagName('head')[0];

    const specialStyle = '.__redacted__ {position: relative;white-space: pre;}.__redacted__:after {background: black;border-radius: 0.1em;box-shadow: 0 0 1px rgba(0, 0, 0, 0.35);content: " ";width: 100%;height: 1.2em;left: 0;position: absolute;-webkit-transform: skewY(-5deg) rotate(5deg);transform: skewY(-5deg) rotate(5deg);}';

    const styleEl = document.createElement('style');
    styleEl.type = 'text/css';

    const textEl = document.createTextNode(specialStyle);

    styleEl.appendChild(textEl);

    head.appendChild(styleEl);
  }

  censor() {
    this.elements.forEach((element) => {
      element.classList.add('__redacted__');
    });
  }
}
// censors all h1 elements
const redacted = new Redacted('h1');
redacted.censor();