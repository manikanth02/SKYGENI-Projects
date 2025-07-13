// This is the main entry point of our backend server Applications

const express = require("express")
const cors = require("cors")
const dataRoutes = require("./routes/index")

const app = express()
const PORT = 5050

// Allow frontend to call backend APIs instead we haev differnet PORT and domain name
app.use(cors())

// All data-related APIs are handled by this route file

console.log(":: >> request in Application");
app.use("/api", dataRoutes)

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
