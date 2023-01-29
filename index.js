const {BrowserWindow,app,shell} = require("electron")
const fs = require("fs")
const convert = require("./handlebarsfile")
var index = convert("index.html",{},"index")
app.whenReady().then(() => {
    let window = new BrowserWindow({
        width: 500,
        height: 500
    })
    window.loadFile()
})
app.on("before-quit",() => {
    fs.unlink(index,() => {})
})