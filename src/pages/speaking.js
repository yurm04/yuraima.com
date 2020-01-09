/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { Styled } from "theme-ui"
import Img from 'gatsby-image'
import Layout from 'gatsby-theme-blog/src/components/layout'
import { past, upcomming } from '../data/conferences'
import SpeakingList from '../components/speaking-list'

export default ({ location, data }) => {
  const { site, file } = data
  const headingStyle = { fontSize: ["2.45rem", "3.25rem", "3.875rem", "4.5rem"], textAlign: 'center' }
  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <Styled.h1 sx={headingStyle}>Speaking</Styled.h1>
      <Img
        fluid={file.childImageSharp.fluid}
        alt="Yuraima speaking at CascadiaJS conference"
        />
      <Styled.p css={{ marginTop: '1rem'}}>
        I'm available for speaking gigs.  Please <Styled.a href="mailto:yurm04@gmail.com?subject=Speaking+Inquiry">reach out!</Styled.a>
        {' '}I love talking accessibility, diversity and inclusion in tech, open source and my journey into web development.
      </Styled.p>
      <SpeakingList
        title="Upcomming Speaking Engagements"
        listItems={upcomming}
      />
      <SpeakingList
        title="Past Speaking Engagements"
        listItems={past}
      />
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
