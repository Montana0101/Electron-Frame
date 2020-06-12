const { app, BrowserWindow } = require('electron')

class BaseWindow extends BrowserWindow {
  constructor(config, file) {
    const defConfig = {
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
      },
    }
    const newConfig = Object.assign(defConfig, config)
    super(newConfig)
    this.loadURL(file)
    //  this.show()
  }
}

module.exports = BaseWindow
