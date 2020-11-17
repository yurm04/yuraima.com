/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql } from 'gatsby'
import { Styled } from "theme-ui"
import Image from '../components/Image'
import Layout from 'gatsby-theme-blog/src/components/layout'

// const getImages = (images) => (images.map(i => (<img style={{ 'max-width': '100%' }} src={`/moving/${i}.jpeg`} />)))



export default ({ location, data }) => {
  const { site, allImageSharp } = data
  const getImages = (images) => (images.map(i => (<Image fileName={i} allImageSharp={allImageSharp} />)))

  const ListItem = ({ name, img, price, desc, children }) => (
    <div style={{'margin-bottom': '15px'}}>
      <Styled.h2>{name} ${price}</Styled.h2>
      {children}
      {desc && <Styled.p>{desc}</Styled.p>}
      {img && getImages(img)}
    </div>
  )

  const headingStyle = { fontSize: ["2.45rem", "3.25rem", "3.875rem", "4.5rem"], textAlign: 'center' }

  return (
    <Layout location={location} title={site.siteMetadata.title}>
      <Styled.h1 sx={headingStyle}>I'm Moving!</Styled.h1>
      <Styled.p>So everything in my apartment has to go. All things are in great condition and prices are listed. Open to delivering some things if you're not too far. Can strike a deal if you take more than one thing. You know how to get in touch with me if you got to this page...</Styled.p>
      <ListItem name="Article couch" price={800} img={['couch1', 'couch2', 'couch3', 'couch4']}>
        <Styled.p>One year old and still beautiful because 7 months of that year I was the only one sitting on it (s i g h. Pandemic life). <a href="https://www.article.com/product/1479/ceni-pyrite-gray-sofa">All in with tax and shipping it cost me $1200</a>. I love this couch, and I hate to sell it. But it'd be weird if I tried to take it with me on my cross-country travels...</Styled.p>
      </ListItem>
      <ListItem name="Bed frame, full" price={150} img={['bed1', 'bed2', 'bed3']} />
      <ListItem name="Tuft and Needle mattress, full" price={350} img={['mattress1', 'mattress2']}/>
      <ListItem name='43" TCL 4K Roku Smart TV' price={250} img={['tv1', 'tv2', 'tv3', 'tv4', 'tv5', 'tv6']} desc="Roku smart TV with all the apps. A year old and in perfect condition." />
      {/* <ListItem name="White-ish rug" price={75} img={['rug1']}>
        <Styled.p>6' ish x 5' ish rug. This rug is absolutely ✨PRISTINE✨ due to this being a shoe-free household. You could eat off of this rug if you wanted to. I don't, because that's super weird, but what you do with this rug after it's yours is your business.</Styled.p>
      </ListItem> */}
      <ListItem name="Tall table with stools" price={100} img={['table1', 'table2', 'table3', 'table4']}/>
      <ListItem name="End table one" price={35} img={['endtable3', 'endtable4']}/>
      <ListItem name="End table two" price={20} img={['endtable1']}/>
      {/* <ListItem name="End table/bar" img={['endtable2']} price={50} desc="I think this is an end table but it holds my liquor so it is, in spirit, a bar (pun intended)." /> */}
      {/* <ListItem name="Floor Lamp" price={80} img={['lamp3']} desc="I have turned this lamp on exactly three times. Humble brag but I have a lot of light in my apartment so I never actually needed it. Will even throw in the mint condition lightbulb." /> */}
      <ListItem name="Table Lamp" price={50} img={['lamp1', 'lamp2']}/>
      {/* <ListItem name="Mirror" price={50} img={['mirror1', 'mirror2']}/> */}
      <ListItem name="Robot Vacuum" price={150}>
        <Styled.p>A year old and affectionately named Eustace <a href="https://www.amazon.com/gp/product/B079QYYGF1">Eufy</a> (but you can rename). Has kept my apartment spotless.</Styled.p>
      </ListItem>
      
      <ListItem name="Kitchen shit" price="???" img={['kitchen1', 'kitchen2', 'kitchen4', 'kitchen5']}>
        <Styled.p>There's a bunch of stuff here. Tell me what you need and we'll figure out a fair price."</Styled.p>
        <Styled.ul>
          <Styled.li>Silverware set</Styled.li>
          <Styled.li>Plate set</Styled.li>
          <Styled.li>Bowl set</Styled.li>
          <Styled.li>Mason Jars, mugs, cups</Styled.li>
          <Styled.li>Knife Set</Styled.li>
          {/* <Styled.li>Blender</Styled.li> */}
          <Styled.li>Pots and pans</Styled.li>
          <Styled.li>Toaster</Styled.li>
          <Styled.li>Baking things</Styled.li>
          <Styled.li>and more...</Styled.li>
        </Styled.ul>
      </ListItem>
      <ListItem name="Bookshelves and other storage" price='???' desc="A few bookselves, drawers, and general storage things. Check the photos (and please don't judge the state of things) and make me an offer for what you like." img={['storage1']}/>
      <ListItem name="Blue rug" price='10 or free' img={['rug2']} desc="6' ish x 5' ish. Honestly just take it."></ListItem>
      <ListItem name="Random things" price="FREE">
        <Styled.p>If you come pick it up it's yours FO FREE.</Styled.p>
        <Styled.ul>
          <Styled.li>Couch pillows</Styled.li>
          <Styled.li>Trash cans</Styled.li>
          <Styled.li>Books</Styled.li>
          <Styled.li>and more...</Styled.li>
        </Styled.ul>
      </ListItem>
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

    allImageSharp {
      nodes {
        fluid {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
