/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import { Styled } from 'theme-ui'

const style = {
  color: 'secondary',
  fontSize: '1.3rem',
  fontWeight: 700,
  letterSpacing: '.5px',
}

export default ({ as = 'li', children, to }) => (
  <Styled.p as={as}>
    <Link sx={style} to={to}>{children}</Link>
  </Styled.p>
)
