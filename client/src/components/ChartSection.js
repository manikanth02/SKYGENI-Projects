// This section wraps bar chart and doughnut chart together

import React from "react"
import { Grid, Typography } from "@mui/material"
import ACVBarChart from "./ACVBarChart"
import ACVDoughnutChart from "./ACVDoughnutChart"

// This component is responsible for laying out both charts
// It receives data from parent and passes it to individual chart components
function ChartSection({ data }) {
  return (
    <>
      {/* Title of the section */}
      <Typography variant="h5" gutterBottom>
        Won ACV mix by Cust Type
      </Typography>

      {/* Use Material UI Grid to align charts in row */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <ACVBarChart data={data} />
        </Grid>

        <Grid item xs={12} md={4}>
          <ACVDoughnutChart data={data} />
        </Grid>
      </Grid>
    </>
  )
}

export default ChartSection
