import React from 'react'
import Img from 'gatsby-image'
import ReactPhotoGallery from 'react-photo-gallery'
import { MdArrowDownward } from 'react-icons/md'

/** @jsx jsx */
import { Container, jsx, Styled } from "theme-ui"
import { mediaQueries, breakpoints } from '../gatsby-plugin-theme-ui/tokens'

export const Gallery = ({ photos, onClick }) => {
  return (
    <section
      sx={{
        minHeight: `50vh`,
      }}
    >
      <div
        sx={{
          maxWidth: breakpoints.xxxl,
          margin: `0 auto`,
        }}
      >
        <ReactPhotoGallery
          onClick={onClick}
          photos={photos}
          margin={8}
          renderImage={({ index, left, top, key, photo, margin, onClick }) => {
            return (
              <Photo
                key={key}
                index={index}
                photo={photo}
                left={left}
                top={top}
                margin={margin}
                onClick={onClick}
              />
            )
          }}
        />
      </div>
    </section>
  )
}

const Photo = ({ photo, margin, index, top, left, onClick }) => {

  const handleClick = (event) => {
    onClick(event, { photo, index })
  }

  const fullName = photo.user.first_name + ` ${photo.user.last_name}`

  return (
    <figure
      sx={{
        cursor: `pointer`,
        margin: `${margin}px`,
        height: photo.height,
        width: photo.width,
        position: `relative`,
        ':hover, :focus, :focus-within': {
          '.download': {
            visibility: `visible`,
            opacity: 1,
          },
          '.button': {
            '::after': {
              transition: `opacity .2s ease-in-out`,
              opacity: 0.8,
            },
          },
        },
      }}
    >
      <button
        onClick={handleClick}
        className="button"
        sx={{
          padding: 0,
          border: `none`,
          width: `100%`,
          height: `100%`,
          cursor: `pointer`,
          '::after': {
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
        }}
      >
        <Img fluid={photo.fluid} alt={photo.alt} onClick={handleClick} />
      </button>
      <div
        className="download"
        sx={{
          position: `absolute`,
          width: `100%`,
          bottom: 3,
          right: 0,
          opacity: 0,
          zIndex: 2,
          transition: `opacity .2s ease-in-out,visibility .1s ease-in-out`,
          ':focus, :focus-within': {
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
          }}
        >
          <div sx={{ flex: 1, display: `flex` }}>
            <img
              sx={{ borderRadius: `100%`, mr: 2 }}
              src={photo.user.profile_image.small}
              alt={fullName}
            />
            <span
              sx={{
                color: `white`,
              }}
            >
              {fullName}
            </span>
          </div>

          <a
            sx={{
              width: `32px`,
              height: `32px`,
              bg: `white`,
              display: `flex`,
              justifyContent: `center`,
              alignItems: `center`,
              borderRadius: `4px`,
              color: `darkGrey`,
              transition: `color .2s ease-in-out`,
              ':hover': {
                color: `inherit`,
                transition: `color .2s ease-in-out`,
              },
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