const storageKey = 'theme-preference'

const onClick = (event) => {
  // flip current value
  // theme.value = theme.value === 'light'
  //   ? 'dark'
  //   : 'light'

    if (theme.value === 'light') {
      theme.value = 'dark'

      // document.getElementById("menu").classList.toggle("show");
      // if (!event.target.matches('.theme-toggle')) {
      
      //   var dropdowns = document.getElementsByClassName("menu-content");
      //   var i;
      //   for (i = 0; i < dropdowns.length; i++) {
      //     var openDropdown = dropdowns[i];
      //     if (openDropdown.classList.contains('show')) {
      //       openDropdown.classList.remove('show');
      //     }
      //   }
      // }
    } else {
      theme.value = 'light'
    }

  setPreference()
}

const getColorPreference = () => {
  if (localStorage.getItem(storageKey))
    return localStorage.getItem(storageKey)
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value)
  reflectPreference()
}

const reflectPreference = () => {
  document.firstElementChild
    .setAttribute('data-theme', theme.value)

  document
    .querySelector('#theme-toggle')
    ?.setAttribute('aria-label', theme.value)
}

const theme = {
  value: getColorPreference(),
}

// set early so no page flashes / CSS is made aware
reflectPreference()

window.onload = () => {
  // set on load so screen readers can see latest value on the button
  reflectPreference()

  // now this script can find and listen for clicks on the control
  document
    .querySelector('#theme-toggle')
    .addEventListener('click', onClick)
}

// // sync with system changes
// window
//   .matchMedia('(prefers-color-scheme: dark)')
//   .addEventListener('change', ({matches:isDark}) => {
//     theme.value = isDark ? 'dark' : 'light'
//     setPreference()
//   })
