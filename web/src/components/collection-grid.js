import React from 'react'

/** @jsx jsx */
import { Container, jsx, Styled } from "theme-ui"
import { mediaQueries, breakpoints } from '../gatsby-plugin-theme-ui/tokens'

export const CollectionGrid = ({ collections }) => {
  return (
    <section
      sx={{
        py: 5,
        px: 4,
        [mediaQueries.lg]: {
          py: 5,
          px: 5,
        },
      }}
    >
      <Container
        sx={{
          maxWidth: breakpoints.lg,
        }}
      >
        <Styled.h2
          sx={{
            fontWeight: `bold`,
            fontSize: 2,
            mb: 4,
            [mediaQueries.lg]: {
              fontWeight: `bold`,
              fontSize: 2,
            },
          }}
        >
          Featured collections
        </Styled.h2>
        {collections && (
          <ul
            sx={{
              listStyle: `none`,
              padding: 0,
              display: `grid`,
              margin: 0,
              gridGap: 4,
              [mediaQueries.lg]: {
                gridTemplateColumns: `repeat(auto-fit, minmax(250px, 250px))`,
              },
            }}
          >
            {collections.map((item) => {
              return (
                <li
                  key={item.id}
                  sx={{
                    bg: `black`,
                    color: `white`,
                    borderRadius: `16px`,
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: `center`,
                    py: 3,
                    px: 3,
                    fontWeight: `bold`,
                    letterSpacing: `1.2px`,
                  }}
                >
                  <span sx={{
                    textAlign: `center`,
                  }}>{item.title}</span>
                </li>
              )
            })}
          </ul>
        )}
      </Container>
    </section>
  )
}