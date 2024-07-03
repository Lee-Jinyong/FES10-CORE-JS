const template = document.createElement('template');

template.innerHTML = `
  <div>bye</div>
  <div>javascript</div>
`

console.log(template)

const app = document.querySelector('#app');
const temp = document.querySelector('#temp');

const clone = template.content.cloneNode(true);

app.appendChild(clone);