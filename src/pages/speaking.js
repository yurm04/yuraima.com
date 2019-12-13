import React from 'react'
import { graphql } from 'gatsby'
import { Styled, css } from "theme-ui"
import Img from 'gatsby-image'
import Layout from 'gatsby-theme-blog/src/components/layout'

export default ({ location, data }) => {
  const { site, file } = data
  
  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <Img
        fluid={file.childImageSharp.fluid}
        alt="Yuraima speaking at CascadiaJS conference"
      />
      <Styled.h2 css={{ fontSize:["2rem", "2.625rem", "3.25rem"] }}>Speaking</Styled.h2>
      <Styled.p>
        I'm available for speaking gigs.  Please <a href="mailto:yurm04@gmail.com?subject=Speaking+Inquiry">reach out!</a>
        I love talking accessibility, diversity and inclusion in tech, open source and my journey into web development.
      </Styled.p>
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

    file(relativePath: { eq: "speaking-large.jpg" }) {
      childImageSharp {
        # Specify a fixed image and fragment.
        # The default width is 400 pixels
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
