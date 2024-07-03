class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <button type="button">btn</button>
    `;

    this.button = this.shadowRoot.querySelector('button');

    console.log(this.button);
  }

  connectedCallback() {
    this.button.addEventListener('click', this.clickMe.bind(this));
  }

  clickMe() {
    console.log(this);
  }
}

customElements.define('user-card', UserCard);

// console.log(document.querySelector('.user-card').shadowRoot.querySelector('button'))
