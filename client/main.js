class Button extends HTMLElement {
  constructor() {
    super();
    
    // c-button의 쉐도우 돔을 열기
    const shadow = this.attachShadow({mode:'open'}); // open, closed

    // 쉐도우 돔 내부에 내가 원하는 태그 넣기
    shadow.innerHTML = `
    <button>hello</button>
    `
  }

  connectedCallback() {

  }

  disconnectedCallback() {

  }

}

customElements.define('c-button', Button);

console.log(document.querySelector('c-button').shadowRoot.querySelector('button'));