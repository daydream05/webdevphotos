/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// [`5184832`, `1978309`, `144033`]
const Unsplash = require('unsplash-js').default
const crypto = require('crypto')
const fetch = require('node-fetch')
const { toJson } = require('unsplash-js')
const { node } = require('prop-types')
const { error } = require('console')
global.fetch = fetch

const unsplash = new Unsplash({ accessKey: process.env.UNSPLASH_ACCESS_KEY })

const getUnsplashPhotos = async (gatsbyFunctions, collections) => {
  const { actions, createContentDigest } = gatsbyFunctions
  const { createNode } = actions

  const photosPromises = collections.map((collection) => {
    return unsplash.collections
      .getCollectionPhotos(collection.id, 1, 30)
      .then(toJson)
      .then((photos) => {
        photos.map((photo) => {
          const nodeData = {
            ...photo,
            collection_id: collection.id,
          }
          const newNode = {
            ...nodeData,
            parent: '__SOURCE__',
            children: [],
            internal: {
              type: 'UnsplashPhoto',
              contentDigest: createContentDigest(nodeData),
              mediaType: 'applicaton/json',
            },
          }

          createNode(newNode)
          return true
        })
      })
      .catch((err) => console.error(err))
  })

  await Promise.all(photosPromises)
}

const getUnsplashCollections = async (gatsbyFunctions, user) => {
  const { actions, createContentDigest, createNodeId } = gatsbyFunctions
  const { createNode } = actions

  const collections = await unsplash.users
    .collections(user)
    .then(toJson)
    .then((items) => {
      const collections = items.map((item) => {
        const nodeData = {
          ...item,
        }
        const newNode = {
          ...nodeData,
          id: createNodeId(item.id),
          collection_id: item.id,
          parent: '__SOURCE__',
          children: [],
          internal: {
            type: 'UnsplashCollection',
            contentDigest: createContentDigest(nodeData),
            mediaType: 'applicaton/json',
          },
        }

        createNode(newNode)
        return item
      })

      return collections
    })

  return collections
}

exports.sourceNodes = async (gatsbyFunctions) => {
  // const collections = [`5184832`, `1978309`, `144033`]
  // const collections = [`8647859`]

  const collections = await getUnsplashCollections(gatsbyFunctions, 'webdevphotos')

  await getUnsplashPhotos(gatsbyFunctions, collections)
}