const {BrowserWindow,app,shell,ipcMain,dialog} = require("electron")
const fs = require("fs")
const fastify = require("fastify")({
logger: true,
ignoreTrailingSlash: true
});
fastify.register(require("@fastify/view"),{
    engine:{
        handlebars:require("handlebars")
    }
});
fastify.get("/index",(req,res) => {
  res.view("",{
    docs: [
      {
        preview:"https://glitch.com/favicon.ico",
        name:"hel"
      }
    ]
})
});
app.whenReady().then(() => {
    let window = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences:{
            preload:app.getAppPath() + "/pre.js"
        }
    })
    window.loadFile(index)
    ipcMain.on("open",(event,args) => {
        dialog.showErrorBox("helo","You just opened " + args[0])
    })
})
app.on("window-all-closed",() => {
    app.quit()
})
app.on("before-quit",() => {
    fs.unlink(index,() => {})
})