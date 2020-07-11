import React from 'react'

/** @jsx jsx */
import { Container, jsx } from "theme-ui"

export const Footer = (props) => {
  return (
    <footer
      sx={{
        height: `64px`,
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
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>,{` & `}
          <a href="https://www.sanity.io">Sanity</a>.
        </div>
      </Container>
    </footer>
  );
}