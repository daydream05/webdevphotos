import React from 'react'
import ReactPhotoGallery from 'react-photo-gallery'
import { MdArrowDownward } from 'react-icons/md'

/** @jsx jsx */
import { Container, jsx, Styled } from "theme-ui"
import { mediaQueries, breakpoints } from '../gatsby-plugin-theme-ui/tokens'

export const Gallery = ({ photos }) => {
  return (
    <section>
      <ReactPhotoGallery
        photos={photos}
        margin={8}
        renderImage={({ index, left, top, key, photo, margin }) => {
          return (
            <Photo key={key} index={index} photo={photo} left={left} top={top} margin={margin} />
          )
        }}
      />
    </section>
  )
}

const Photo = ({ photo, margin, index, top, left }) => {
  return (
    <figure
      tabIndex="0"
      sx={{
        margin: `${margin}px`,
        height: photo.height,
        width: photo.width,
        position: `relative`,
        '::before': {
          transition: `opacity .2s ease-in-out`,
          content: `""`,
          position: `absolute`,
          top: 0,
          left: 0,
          width: `100%`,
          height: `100%`,
          backgroundColor: `black`,
          opacity: 0,
        },
        ':hover, :focus': {
          '.download': {
            visibility: `visible`,
            opacity: 1,
          },
          '::before': {
            transition: `opacity .2s ease-in-out`,
            opacity: 0.4,
          },
        },
      }}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        sx={{
          display: `block`,
          height: `100%`,
        }}
      />
      <div
        className="download"
        tabIndex="0"
        sx={{
          position: `absolute`,
          width: `100%`,
          bottom: 3,
          right: 0,
          opacity: 0,
          transition: `opacity .2s ease-in-out,visibility .1s ease-in-out`,
          ':focus': {
            visibility: 'visible',
            opacity: 1,
            transition: `opacity .2s ease-in-out,visibility .1s ease-in-out`,
          },
        }}
      >
        <div
          sx={{
            display: `flex`,
            justifyContent: `space-between`,
            width: `100%`,
            px: 3,
            zIndex: 1,
          }}
        >
          <span
            sx={{
              color: `white`,
            }}
          >
            {photo.collectionTitle}
          </span>

          <a
            sx={{
              width: `32px`,
              height: `32px`,
              bg: `white`,
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
              borderRadius: `4px`,
              color: `inherit`,
            }}
            title="Download photo"
            href={photo.downloadUrl}
            download
          >
            <MdArrowDownward />
          </a>
        </div>
      </div>
    </figure>
  )
}