import React from "react"
import { Link } from "gatsby"
import { css, Styled } from "theme-ui"
import NavItem from '../../components/navItem'
import Nav from "../../components/nav"

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children, location }) => (
  <Styled.h1
    css={css({
      my: 0,
      fontSize: ["3.25rem", "3.875rem", "4.5rem"],
    })}
  >
    <Styled.a
      as={Link}
      css={{
        color: `inherit`,
        boxShadow: `none`,
        textDecoration: `none`,
      }}
      to={`/`}
    >
      {children}
    </Styled.a>
  </Styled.h1>
)

export default ({ children, ...props }) => {
  return (
    <header>
      {props.location.pathname !== rootPath && <NavItem as="a" to="/">Home</NavItem>}
      {props.location.pathname === rootPath && (
        <div
          css={css({
            maxWidth: `container`,
            mx: `auto`,
            px: 3,
            pt: 4,
          })}
        >
          <div
            css={css({
              display: `flex`,
              justifyContent: `space-between`,
              alignItems: `baseline`,
              mb: 4,
            })}
          >
            <Title {...props}>Yuraima <br /> Estevez</Title>
            {children}
          </div>
          {props.location.pathname === rootPath && <Nav />}
          {/* {props.location.pathname === rootPath && <Bio />} */}
        </div>
      )}
    </header>
  )
}
