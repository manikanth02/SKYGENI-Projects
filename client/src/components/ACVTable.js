// In this component we will renders a data table showing ACV metrics by quarter and customer type

import React from "react"
import { Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material"

function ACVTable({ data }) {
  // Here, we get  all distinct quarters
  const quarters = [...new Set(data.map(d => d.closed_fiscal_quarter))]

  // Here, we group data by quarter and customer type
  const grouped = {}
  data.forEach(item => {
    if (!grouped[item.closed_fiscal_quarter]) grouped[item.closed_fiscal_quarter] = {}
    grouped[item.closed_fiscal_quarter][item.Cust_Type] = item
  })

  // Pre-calculate totals
  const totals = {
    Existing: data.filter(d => d.Cust_Type === "Existing Customer"),
    New: data.filter(d => d.Cust_Type === "New Customer")
  }

  const calcTotal = arr => arr.reduce((sum, d) => sum + d.acv, 0)

  return (
    <>
      <Typography variant="h6" mt={4}>ACV Breakdown Table</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Cust Type</TableCell>
            {quarters.map(q => <TableCell key={q}>{q}</TableCell>)}
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {["Existing Customer", "New Customer"].map(type => (
            <TableRow key={type}>
              <TableCell>{type}</TableCell>
              {quarters.map(q => (
                <TableCell key={q}>
                  ${(grouped[q][type]?.acv || 0).toLocaleString()}
                </TableCell>
              ))}
              <TableCell>
                ${calcTotal(totals[type === "Existing Customer" ? "Existing" : "New"]).toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default ACVTable
