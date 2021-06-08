const { ipcRenderer } = require('electron')

document.getElementById('moveTurtleForward').addEventListener('click', async() => {
    const moveTurtleForward = await ipcRenderer.invoke('cc-turtle:moveF')
    document.getElementById('turtle-pos').innerHTML = hasMoved ? 'Yes' : 'No'
})