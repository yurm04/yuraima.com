import React from "react"
import { Link } from "gatsby"
import { css, useColorMode, Styled } from "theme-ui"
import Bio from "gatsby-theme-blog/src/components/bio"
import Nav from "../../components/nav"

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children, location }) => (
  <Styled.h1
    css={css({
      my: 0,
      fontSize: ["32px", "48px", "72px"],
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
      {props.location.pathname !== rootPath && <Link to="/">Home</Link>}
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
