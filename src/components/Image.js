/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({ fileName, alt, allImageSharp }) => {
  const image = allImageSharp.nodes.find(n => {
    return n.fluid.originalName === `${fileName}.jpeg`
  })

  if (image) {
    return (
      <figure>
        <Img style={{"max-width": "100%"}} imgStyle={{ 'objectFit': 'contain'}} fluid={image.fluid} alt={alt}/>
      </figure>
    )
  }
}

export default Image
