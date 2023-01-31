const {contextBridge,ipcRenderer} = require("electron")
contextBridge.exposeInMainWorld("docs",{
   open: function(name) {
    ipcRenderer.send("open",[name])
   }
})