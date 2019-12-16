/** @jsx jsx */
/* eslint-disable no-unused-vars */

import React from 'react'
import { jsx } from 'theme-ui'
import { Styled } from 'theme-ui'
import { colorText } from '../utils/styles'
import Emoji from '../components/emoji'

const styles = {
  padding: 0,
  margin: 0,
  listStyle: 'none',
}

const headingStyle = {
  color: 'secondary',
  fontSize: '1.2rem',
  letterSpacing: '.5px'
}

const dataStyle = {
  display: 'flex',
  alignItems: 'center',
  svg: {
    marginRight: '5px',
    fill: colorText
  },
  a: {
    marginBottom: '0',
    textDecoration: 'none',
    color: colorText
  }
}

const SpeakingList = ({ title, listItems }) => {
  return (
    <>
      <Styled.h2>{title}</Styled.h2>
      <ul css={styles}>
      {listItems.map((item) => {
        const { type, talkTitle, confName, date, slides, video, confUrl } = item
        return (
            <li css={{ marginBottom: '2rem'}}>
              <strong><Styled.h3 sx={headingStyle} as="a" href={confUrl}>{confName}</Styled.h3></strong>
              <Styled.p css={{ marginBottom: '.5rem' }}>{type === 'keynote' ? <><Emoji label="key" emoji="🔑" /> <Emoji label="note" emoji="📝" /></> : <Emoji label="speaking" emoji="🗣" />} {talkTitle}</Styled.p>
              <div 
                css={{ 
                  display: 'grid', 
                  'grid-template-columns': 'repeat(3, 1fr)', 
                  marginBottom: '1rem' 
                }}>
              {date && (
                  <div css={dataStyle}>
                    <Emoji label="calendar" emoji="🗓" />
                    {date}
                  </div>)
                }
                {slides && (
                  <div css={dataStyle}>
                    <Emoji label="slides" emoji="📑" />
                    <Styled.p as="a" href={slides}>slides</Styled.p>
                  </div>)
                }
                {video && (
                  <div css={dataStyle}>
                    <Emoji label="video tape" emoji="📼" />
                    <Styled.p as="a" href={video}>video</Styled.p>
                  </div>)
                }
              </div>
            </li>
          )
      })}
      </ul>
    </>
  )
}

export default SpeakingList
