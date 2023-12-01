const topNav = document.querySelector('.topNav');
const serviceLink = 'index.html#serviceBox';
const projectLink = 'index.html#projectBox';

topNav.innerHTML = `
  <div>
  <a href='/' style="color:black">
  <h1>yotabyt</h1>
  </a>
  <i class="material-symbols-outlined" style="color: rgb(135, 135, 135);">atr</i>
  </div>

  <nav>
  <button class="material-symbols-outlined" onclick="toggleMenu()">linear_scale</button>
  <a href="index.html">Home <sub></sub></a>
  <a href="about.html">About <sub></sub></a>
  <a href="${serviceLink}">Services <sub></sub></a>
  <a href="${projectLink}">Projects <sub></sub></a>
  </nav>

  <legend>
  <a href="tel:+233558420368"> <i class="material-symbols-outlined">call</i> +233 55 842 0368</a>
  </legend>
`

const minMenu = document.querySelector('.topNav nav');
const toggleMenu = () => {
  minMenu.classList.toggle('change')
}