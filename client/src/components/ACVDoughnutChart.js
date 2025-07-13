// In this component we will renders a donut chart showing total ACV % split between existing and new customers

import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

function ACVDoughnutChart({ data }) {
  const ref = useRef()

  useEffect(() => {
    if (!data || data.length === 0) return

    // We will group total ACV by customer type
    const totals = d3.rollup(
      data,
      v => d3.sum(v, d => d.acv),
      d => d.Cust_Type
    )

    const color = d3.scaleOrdinal(["#1976d2", "#f57c00"])
    const pie = d3.pie().value(d => d[1])(Array.from(totals))
    const arc = d3.arc().innerRadius(60).outerRadius(100)

    const svg = d3.select(ref.current)
    svg.selectAll("*").remove()

    const width = 300
    const height = 300

    const g = svg
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`)

    // Here, we draw slices
    g.selectAll("path")
      .data(pie)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i))

    // Here, we enter text (total)
    g.append("text")
      .text("Total")
      .attr("text-anchor", "middle")
      .attr("dy", "-0.3em")
      .style("font-weight", "bold")
  }, [data])

  return <svg ref={ref}></svg>
}

export default ACVDoughnutChart
