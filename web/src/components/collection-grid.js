import React from 'react'

/** @jsx jsx */
import { Container, jsx, Styled } from "theme-ui"
import { mediaQueries, breakpoints } from '../gatsby-plugin-theme-ui/tokens'

export const CollectionGrid = ({ collections, onSelect }) => {
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
              gridGap: 3,
              [mediaQueries.lg]: {
                display: `flex`,
                flexFlow: `wrap`,
                '> *': {
                  mr: 3,
                  mb: 3,
                },
              },
            }}
          >
            <li
              sx={{
                bg: `black`,
                color: `white`,
                borderRadius: `16px`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                fontWeight: `bold`,
                letterSpacing: `1.2px`,
                lineHeight: 1,
                height: `80px`,
                minWidth: `150px`,
              }}
            >
              <button
                sx={{
                  padding: 0,
                  border: `none`,
                  background: `unset`,
                  color: `inherit`,
                  font: `inherit`,
                  width: `100%`,
                  height: `100%`,
                  cursor: `pointer`,
                  py: 3,
                  px: 3,
                }}
                onClick={() => onSelect(null)}
              >
                <span
                  sx={{
                    textAlign: `center`,
                  }}
                >
                  All
                </span>
              </button>
            </li>
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
                    fontWeight: `bold`,
                    letterSpacing: `1.2px`,
                    lineHeight: 1,
                    height: `80px`,
                    minWidth: `150px`,
                  }}
                >
                  <button
                    sx={{
                      padding: 0,
                      border: `none`,
                      background: `unset`,
                      color: `inherit`,
                      font: `inherit`,
                      width: `100%`,
                      height: `100%`,
                      cursor: `pointer`,
                      py: 3,
                      px: 3,
                    }}
                    onClick={() => onSelect(item.title.toLowerCase())}
                  >
                    <span
                      sx={{
                        textAlign: `center`,
                      }}
                    >
                      {item.title}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </Container>
    </section>
  )
}