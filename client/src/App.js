import React, { useEffect, useState } from "react"
import { Container } from "@mui/material"
import { getCustomerType } from "./services/api"
import ChartSection from "./components/ChartSection"
import ACVTable from "./components/ACVTable"

function App() {
  const [acvData, setAcvData] = useState([])

  useEffect(() => {
    getCustomerType().then(res => setAcvData(res.data))
  }, [])

  return (
    <Container>
      <ChartSection data={acvData} />
      <ACVTable data={acvData} />
    </Container>
  )
}

export default App
