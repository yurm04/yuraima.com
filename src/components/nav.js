/** @jsx jsx */
import { jsx } from 'theme-ui'
import NavItem from './navItem'

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
  }
}

const liStyles = {
  color: 'secondary',
  fontSize: '1.3rem',
}

export default () => (
  <nav css={styles}>
    <ul>
      <NavItem to="/about/">About</NavItem>
      <NavItem to="/speaking/">Speaking</NavItem>
    </ul>
  </nav>
)
