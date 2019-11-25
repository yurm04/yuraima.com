import React from 'react'
import { graphql } from 'gatsby'
import { Styled, css } from "theme-ui"
import Layout from 'gatsby-theme-blog/src/components/layout'

export default ({ location, data }) => {
  const { site } = data
  
  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <Styled.h2>HELLO</Styled.h2>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
