import React from 'react'
import { graphql, Link } from 'gatsby'
import { Styled } from "theme-ui"
import Img from 'gatsby-image'
import Layout from 'gatsby-theme-blog/src/components/layout'

const imageStyles = {
  'max-height': '500px',
  'overflow': 'hidden'
}

export default ({ location, data }) => {
  const { site, file } = data
  
  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <Styled.h1 css={{ fontSize: ["3.25rem", "3.875rem", "4.5rem"], }}>About</Styled.h1>
      <div css={imageStyles}>
        <Img
          fluid={file.childImageSharp.fluid}
          alt="Yuraima looking at the camera resting her hand on her chin"
          />
      </div>
      <Styled.p css={{ marginTop: '1rem'}}>
        Yuraima Estevez is a Sr. Software Engineer at the New York Times. She specializes in
        {' '} building web experiences, focusing on how we can make our apps work for everyone.
        {' '} Yuraima's talents include – but are not limited to – saying yes to plans and then
        {' '} forgetting about them later, talking way too loud in quiet places and spotting dogs
        {' '} to say "hello" to. Sometimes she <Styled.a><Link to="/speaking">speaks</Link></Styled.a>
        {' '} in front of other people, <Styled.a><Link to="/speaking">writes</Link></Styled.a> about 
        {' '} stuff that matters to her, and recently discovered that <Styled.a href="https://twitter.com/Yurm04">twitter</Styled.a> is a thing.
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

    file(relativePath: { eq: "me.jpg" }) {
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
