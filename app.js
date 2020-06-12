const { app, BrowserWindow, ipcMain } = require('electron')
const BaseWindow = require('./model')

app.on('ready', () => {
  ipcMain.on('add_video', () => {
    console.log('收到添加视频事件')
  })

  const win = new BaseWindow(
    {
      width: 1280,
      height: 720,
      // frame: false,
    },
    'http://localhost:7777'
  )
  win.webContents.openDevTools()

  //   const secondWin = new BaseWindow(
  //     { width: 500, height: 400, frame: false, parent: win },
  //     './src/secondWin.html'
  //   )
  //   secondWin.setIgnoreMouseEvents(true)  //穿透界面
})
