// This file controls the logic for each API call

const { readJSONFile } = require("../utils/index")

// Return customer type data
const getCustomerType = (req, res) => {
    console.log("::: >> data in controller")
  const data = readJSONFile("customerType.json")
  res.json(data)
}

// Return account industry data
const getAccountIndustry = (req, res) => {
  const data = readJSONFile("accountIndustry.json")
  res.json(data)
}

// Return team data
const getTeam = (req, res) => {
  const data = readJSONFile("team.json")
  res.json(data)
}

// Return acv range data
const getACVRange = (req, res) => {
  const data = readJSONFile("acvRange.json")
  res.json(data)
}

module.exports = {
  getCustomerType,
  getAccountIndustry,
  getTeam,
  getACVRange
}
