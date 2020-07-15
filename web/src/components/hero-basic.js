import React from 'react'
/** @jsx jsx */
import { Container, jsx } from 'theme-ui'
import { breakpoints, mediaQueries } from '../gatsby-plugin-theme-ui/tokens';

export const HeroBasic = () => {
  return (
    <section
      sx={{
        pt: 6,
        pb: 4,
      }}
    >
      <Container
        sx={{
          px: 4,
          [mediaQueries.lg]: {
            px: 0,
            maxWidth: breakpoints.lg,
          },
        }}
      >
        <Container
          sx={{
            ml: 0,
            [mediaQueries.lg]: {
              maxWidth: `50%`,
            },
          }}
        >
          <h1
            sx={{
              fontSize: 6,
              lineHeight: 1,
              mt: 0,
              mb: 2,
            }}
          >
            Stock photos for your blog posts
          </h1>
          <div>
            <p
              sx={{
                fontSize: 3,
              }}
            >
              Open-sourced stock photos that speak your language.
            </p>
          </div>
        </Container>
      </Container>
    </section>
  );
}