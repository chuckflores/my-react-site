import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Chuck Flores <br /> Product Designer</h1>
        <p>Currently working at Pulse Digital, designing marketing management dashboards for Pharma and Biotech companies</p>
        <Link to="/page-2/">Watch The Video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
