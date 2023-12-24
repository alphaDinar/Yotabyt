const rootStyles = document.documentElement.style;

const setDarkTheme = () => {
  rootStyles.setProperty('--bg', '#1D1C1D');
  rootStyles.setProperty('--color', 'white');
  rootStyles.setProperty('--primary-text', '#1D1C1D');
  rootStyles.setProperty('--service', 'white');
  rootStyles.setProperty('--service-scale', '#bae6ec');
}

const setLightTheme = () => {
  rootStyles.setProperty('--bg', 'white');
  rootStyles.setProperty('--color', 'black');
  rootStyles.setProperty('--primary-text', 'white');
  rootStyles.setProperty('--service', '#468efa');
  rootStyles.setProperty('--service-scale', '#00082a');
}

const topNav = document.querySelector('.topNav');

topNav.innerHTML = `
      <logo-tag><span>yotabyt</span> <i class="material-symbols-outlined">atr</i></logo-tag>
      <nav>
        <div>
          <a href="/">Home <small></small></a>
          <a href="#aboutPage">About <small></small></a>
          <a href="">Services <small></small></a>
        </div>
        <button>
          <a href="#contactPage"">Contact Us</a>
        </button>
        <p onclick="toggleDarkMode()">
          <small></small>
        </p>
      </nav>
`

const footer = document.querySelector('footer');

if(footer){
  footer.innerHTML = `
      <section class="iconBox">
          <a class="fa-brands fa-twitter"></a>
          <a class="fa-brands fa-youtube"></a>
          <a class="fa-brands fa-instagram"></a>
          <a class="fa-brands fa-facebook"></a>
          <a class="fa-brands fa-google"></a>
          <a class="fa-brands fa-linkedin"></a>
          <a class="fa-brands fa-tiktok"></a>
          <a class="fa-brands fa-snapchat"></a>
        </section>
        <hr>
      <logo-tag style="color: white;"><span>yotabyt</span> <i class="material-symbols-outlined">atr</i></logo-tag>
  `
}


const toggleTab = document.querySelector('.topNav p small')
const toggleDarkMode = () => {
  if (!toggleTab.classList.contains('dark')) {
    sessionStorage.setItem('mode', 'dark')
    setDarkTheme()
  } else {
    sessionStorage.setItem('mode', 'light')
    setLightTheme()
  }
  toggleTab.classList.toggle('dark')
}


if (sessionStorage.getItem('mode')) {
  if (sessionStorage.getItem('mode') === 'light') {
    setLightTheme()
  } else {
    toggleTab.classList.add('dark')
    setDarkTheme()
  }
}


