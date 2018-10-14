import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
  background: #F1F3F5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`

const Text = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #4B6791;
  max-width: 500px;
  margin: 0 auto;
`

const Button = styled.button`
  background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
  box-shadow: 0px 10px 20px rgba(101,41,255,0.15);
  border-radius: 30px;
  font-size: 24px;
  font-weight: 600;
  color: white;
  border: none;
  padding: 16px 60px;
  justify-self: center;
  transition: 0.3s ease;

  &:hover {
    box-shadow: 0px 10px 20px rgba(101,41,255,0.25);
    transform: translateY(-3px);
    cursor: pointer;
  }
`

const LinkGroup = styled.div`
  width: 500px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  a {
    transition: 0.8s;

    &:hover {
      color: black;
    }
  }

`

const CopyRight = styled.div`
  color: rgba(0,0,0,.4);
  max-width: 500px;
  margin: 0 auto;
`

const Footer = ({ data, children }) => (
  <FooterGroup>
    <Text>Tweet "Prototype and build apps with React and Swift. New Courses by Me"</Text>
    <Button>Tweet</Button>
    <LinkGroup>
      {
        data.allContentfulLink.edges.map(edge => (
          <a href={edge.node.url}>{edge.node.title}</a>
        ))
      }
    </LinkGroup>
    <CopyRight>{children}</CopyRight>
  </FooterGroup>
)

export default Footer
