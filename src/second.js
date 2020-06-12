const { ipcRenderer } = require('electron')

const addVideo = document.getElementById('add_video')

addVideo.addEventListener('click', (e, target) => {
  ipcRenderer.send('add_video')
})
