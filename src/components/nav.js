/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'
import { gradientFont } from '../utils/styles'
const styles = {
  ul: {
    padding: 0,
    margin: 0,
  },
  li: {
    listStyle: 'none',
    display: 'inline-block',
    padding: 0,
    paddingRight: '30px',
    margin: 0,
    fontWeight: 700,
    letterSpacing: '.5px',
  }
}

const liStyles = {
  color: 'secondary',
  fontSize: '21px',

}

export default () => (
  <nav css={styles}>
    <ul>
      <Styled.p as="li">
        <Link sx={liStyles} to="/speaking/">Speaking</Link>
      </Styled.p>
      <Styled.p as="li">
        <Link sx={liStyles} to="/about/">About</Link>
      </Styled.p>
    </ul>
  </nav>
)
