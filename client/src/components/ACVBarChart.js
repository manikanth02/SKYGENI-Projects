// This component will renders a stacked bar chart showing ACV by quarter and customer type

import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

function ACVBarChart({ data }) {
  const ref = useRef()

  useEffect(() => {
    if (!data || data.length === 0) return

    //We will group data by quarter
    const grouped = d3.groups(data, d => d.closed_fiscal_quarter)

    // we will map into bar-friendly format
    const barData = grouped.map(([quarter, items]) => {
      const existing = items.find(d => d.Cust_Type === "Existing Customer") || { acv: 0 }
      const newC = items.find(d => d.Cust_Type === "New Customer") || { acv: 0 }
      return {
        quarter,
        existing: existing.acv,
        new: newC.acv,
        total: existing.acv + newC.acv
      }
    })

    // Here, we will setup SVG dimensions
    const svg = d3.select(ref.current)
    svg.selectAll("*").remove() // clearing previous render

    const margin = { top: 20, right: 30, bottom: 40, left: 60 }
    const width = 600 - margin.left - margin.right
    const height = 400 - margin.top - margin.bottom

    const g = svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)

    const x = d3.scaleBand()
      .domain(barData.map(d => d.quarter))
      .range([0, width])
      .padding(0.3)

    const y = d3.scaleLinear()
      .domain([0, d3.max(barData, d => d.total) * 1.1])
      .range([height, 0])

    g.append("g").call(d3.axisLeft(y))
    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))

    // Here, we draw existing customer bars (bottom)
    g.selectAll(".bar-existing")
      .data(barData)
      .enter()
      .append("rect")
      .attr("x", d => x(d.quarter))
      .attr("y", d => y(d.existing))
      .attr("width", x.bandwidth())
      .attr("height", d => height - y(d.existing))
      .attr("fill", "#1976d2")

    // Here , we draw new customer bars 
    g.selectAll(".bar-new")
      .data(barData)
      .enter()
      .append("rect")
      .attr("x", d => x(d.quarter))
      .attr("y", d => y(d.existing + d.new))
      .attr("width", x.bandwidth())
      .attr("height", d => height - y(d.new))
      .attr("fill", "#f57c00")
  }, [data])

  return <svg ref={ref}></svg>
}

export default ACVBarChart