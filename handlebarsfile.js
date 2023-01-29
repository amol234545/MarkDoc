const handlebars = require("handlebars")
const fs = require("fs")
function convertFile(filepath,data) {
    let text = fs.readFileSync(filepath,{
        encoding: "utf-8"
    })
    return handlebars.compile(text)(data)
}
module.exports = convertFile
