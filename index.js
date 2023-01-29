const {BrowserWindow,app,shell} = require("electron")
const convert = require("./handlebarsfile")
console.log(convert("index.html",{}))
app.whenReady().then(() => {
    let window = new BrowserWindow({
        width: 500,
        height: 500
    })
    window.loadFile("index.html")
})