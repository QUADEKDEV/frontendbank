
import BarChart from "../components/Mychart";
import React from 'react'

const Charts = () => {

  return (
    <div className="charts">
          <div className="chart-container">
            <div className="chart-header">
              <div className="chart-title">Spending Analytics</div>
              <div className="chart-actions">
                Current Year
              </div>
            </div>
            <div className="chart-view">
              {<BarChart/>}
            </div>
          </div>
        </div>
  )
}

export default Charts
