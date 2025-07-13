// This file contains all API routes related to data

const express = require("express")
const router = express.Router()
const {
  getCustomerType,
  getAccountIndustry,
  getTeam,
  getACVRange
} = require("../controllers/index")

// Route for customer type data
router.get("/customer-type", getCustomerType)

// Route for account industry data
router.get("/account-industry", getAccountIndustry)

// Route for team data
router.get("/team", getTeam)

// Route for acv range data
router.get("/acv-range", getACVRange)

module.exports = router
