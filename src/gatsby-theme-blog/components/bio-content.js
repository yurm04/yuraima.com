/** @jsx jsx */
import React, { Fragment } from "react"
import { jsx } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    This is where <a sx={{color: `green`}} href="http://example.com/">your name</a>
    {` `}
    goes.
    <br />
    Or whatever, you make the rules.
  </Fragment>
)
