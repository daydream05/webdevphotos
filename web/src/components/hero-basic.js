import React from 'react'
/** @jsx jsx */
import { Container, jsx } from 'theme-ui'
import { breakpoints, mediaQueries } from '../gatsby-plugin-theme-ui/tokens';

export const HeroBasic = () => {
  return (
    <section
      sx={{
        py: 6,
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
            Stock photos of your tech stack
          </h1>
          <div>
            <p
              sx={{
                fontSize: 3,
              }}
            >
              Open-sourced stock photos for your web development related blog
              posts.
            </p>
          </div>
        </Container>
      </Container>
    </section>
  );
}