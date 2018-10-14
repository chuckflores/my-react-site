import React from 'react'
import Layout from '../components/Layout/'
import { Link } from 'gatsby'
import styled from 'styled-components'

import statdata from '../../staticdata.json'

import Card from '../components/Card'
import CardGroup from '../components/Card/CardGroup'
import Cell from '../components/Cell'
import Section from '../components/Section'
import Wave from '../components/Wave'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Chuck Flores <br /> Product Designer</h1>
        <p>Currently working at Pulse Digital, designing marketing management dashboards for Pharma and Biotech companies</p>
        <Link to="/page-2/">Watch The Video</Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" alt="sketch" />
          <img src={require('../images/logo-figma.png')} width="50" alt="figma" />
          <img src={require('../images/logo-studio.png')} width="50" alt="InVision Studio" />
          <img src={require('../images/logo-framer.png')} width="50" alt="Framer" />
          <img src={require('../images/logo-react.png')} width="50" alt="React" />
          <img src={require('../images/logo-swift.png')} width="50" alt="Swift" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2> 11 courses, more coming</h2>
      <CardGroup>
        <Card
          title="Design System"
          text="10 sections"
          image={require("../images/wallpaper.jpg")}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("../images/wallpaper2.jpg")}
        />
        <Card
          title="Sound Design"
          text="5 sections"
          image={require("../images/wallpaper3.jpg")}
        />
        <Card
          title="ARKit 2"
          text="10 sections"
          image={require("../images/wallpaper4.jpg")}
        />
        <Card
          title="Sound Design with Cubase"
          text="5 sections"
          image={require("../images/wallpaper.jpg")}
        />
        <Card
          title="Video Editing in ScreenFlow"
          text="4 sections"
          image={require("../images/wallpaper2.jpg")}
        />
        <Card
          title="Create a Sketch Plugin"
          text="7 sections"
          image={require("../images/wallpaper3.jpg")}
        />
        <Card
          title="Motion Design in After Effects"
          text="5 sections"
          image={require("../images/wallpaper4.jpg")}
        />
      </CardGroup>
    </div>
    <Section
      image={require('../images/wallpaper.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />

    <SectionCaption>12 sections – 6 Hours</SectionCaption>
    <SectionCellGroup>
      {statdata.cells.map(cell => (
        <Cell
          title={cell.title}
          image={cell.image}
        />
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage
