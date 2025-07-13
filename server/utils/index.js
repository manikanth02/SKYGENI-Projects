// We have made a common function which helps us to read JSON file from data folder.

const fs = require("fs")
const path = require("path")

function readJSONFile(filename) {
  const filePath = path.join(__dirname, "../data", filename)
  const raw = fs.readFileSync(filePath, "utf-8")
  return JSON.parse(raw)
}

module.exports = { readJSONFile }
