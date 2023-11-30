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

