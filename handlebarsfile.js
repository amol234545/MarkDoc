const handlebars = require("handlebars")
const fs = require("fs")
function convertHandleBarsToHtml(filepath,data,otherfilename) {
    let text = fs.readFileSync(filepath,{
        encoding: "utf-8"
    })
    fs.writeFile(otherfilename + ".html",handlebars.compile(text)(data),"utf-8",() => {})
    return otherfilename + ".html"
}
module.exports = convertHandleBarsToHtml