const {app, BrowserWindow} = require('electron') // http://electronjs.org/docs/api
const path = require('path') // https://nodejs.org/api/path.html
const url = require('url') // https://nodejs.org/api/url.html

let window = null

// Wait until the app is ready
app.once('ready', () => {
  // Create a new window
  window = new BrowserWindow({
    // Set the initial width to 400px
    width: 400,
    // Set the initial height to 500px
    height: 140,
    // Don't show the window until it ready, this prevents any white flickering
    show: false,
    // Don't allow the window to be resized.
    resizable: false,
    //additional
    // modal: true,
    // darkTheme: true,
    // titleBarStyle: 'hidden',
    // titleBarOverlay: true
    autoHideMenuBar: true,
    icon: 'favicon.ico'
  })
  // window.removeMenu()

  // Load a URL in the window to the local index.html path
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'countdown.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Show window when page is ready
  window.once('ready-to-show', () => {
    window.show()
  })
})
