const handlebars = require("handlebars")
const fs = require("fs")
function convertFileToHbs(filepath,data,otherfilename) {
    let text = fs.readFileSync(filepath,{
        encoding: "utf-8"
    })
    fs.writeFile(otherfilename + ".hbs",handlebars.compile(text)(data),"utf-8",() => {})
    return otherfilename + ".hbs"
}
module.exports = convertFileToHbs
