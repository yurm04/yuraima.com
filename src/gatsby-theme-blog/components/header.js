import React from "react"
import { Link } from "gatsby"
import { css, useColorMode, Styled } from "theme-ui"
import Bio from "gatsby-theme-blog/src/components/bio"

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children, location }) => {
  if (location.pathname === rootPath) {
    return (
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
  } else {
    return (
      <Styled.h1
        as="p"
        css={css({
          my: 0,
        })}
      >
        <Styled.h1
          as={Link}
          css={css({
            boxShadow: `none`,
            textDecoration: `none`,
            color: `primary`,
            fontSize: ["24px", "32px", "48px"],
          })}
          to={`/`}
        >
          {children}
        </Styled.h1>
      </Styled.h1>
    )
  }
}

export default ({ children, ...props }) => {
  return (
    <header>
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
        {props.location.pathname === rootPath && <Bio />}
      </div>
    </header>
  )
}
