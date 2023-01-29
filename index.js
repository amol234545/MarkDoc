const {BrowserWindow,app,shell} = require("electron")
const fs = require("fs")
const convert = require("./handlebarsfile")
var index = convert("index.hbs",{},"index")
app.whenReady().then(() => {
    let window = new BrowserWindow({
        width: 500,
        height: 500
    })
    window.loadFile(index)
})
app.on("window-all-closed",() => {
    app.quit()
})
app.on("before-quit",() => {
    fs.unlink(index,() => {})
})