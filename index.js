const { app, BrowserWindow, ipcMain, Menu } = require('electron')
var server = require("./server")

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    icon: __dirname + '/turtle_pickaxe.png',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true
    }
  })

  win.loadURL('http://localhost:3001')
}

//Menu.setApplicationMenu(null);

ipcMain.handle('cc-turtle:moveF', () => {
    return console.log("Turtle moved!")
})

ipcMain.handle('server:online', () => {
    console.log(isServerOnline());
    return isOnline;
})

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
