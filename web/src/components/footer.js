import React from 'react'

/** @jsx jsx */
import { Container, jsx } from "theme-ui"
import { mediaQueries } from '../gatsby-plugin-theme-ui/tokens'

export const Footer = (props) => {
  return (
    <footer
      sx={{
        minHeight: `256px`,
        bg: `black`,
        position: `relative`,
        overflow: `hidden`,
      }}
      className={props.className}
    >
      <Container
        sx={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          height: `100%`,
        }}
      >
        <div
          sx={{
            position: `absolute`,
            right: 4,
            top: 5,
          }}
        >
          <span
            sx={{
              display: `block`,
              color: `white`,
              opacity: 0.1,
              lineHeight: 0.9,
              fontWeight: `bold`,
              fontSize: 5,
              [mediaQueries.lg]: {
                fontSize: `128px`,
              },
            }}
          >
            WebDevPhotos
          </span>
        </div>
        <div
          sx={{
            color: `white`,
            zIndex: 1,
            position: `absolute`,
            bottom: 4,
            opacity: 0.75,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a
            href="https://www.gatsbyjs.org"
            sx={{
              color: `inherit`,
            }}
          >
            Gatsby
          </a>
          ,{` & `}
          <a
            href="https://www.sanity.io"
            sx={{
              color: `inherit`,
            }}
          >
            Sanity
          </a>
          .
        </div>
      </Container>
    </footer>
  )
}