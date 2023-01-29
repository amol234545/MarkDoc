const {BrowserWindow,app,shell} = require("electron")
app.whenReady().then(() => {
    let window = new BrowserWindow({
        width: 500,
        height: 500
    })
    window.loadFile("index.html")
})

