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
      .getCollectionPhotos(collection, 1, 10)
      .then(toJson)
      .then((photos) => {
        photos.map((photo) => {
          const nodeData = {
            ...photo,
            collection_id: collection,
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

const getUnsplashCollections = async (gatsbyFunctions, collections) => {
  const { actions, createContentDigest, createNodeId } = gatsbyFunctions
  const { createNode } = actions

  const collectionsPromises = collections.map((collection) => {
    return unsplash.collections
      .getCollection(collection)
      .then(toJson)
      .then(coll => {
        const nodeData = {
          ...coll,
        }
        const newNode = {
          ...nodeData,
          id: createNodeId(JSON.stringify(coll.id)),
          collection_id: collection,
          children: [],
          internal: {
            type: 'UnsplashCollection',
            contentDigest: createContentDigest(nodeData),
            mediaType: 'applicaton/json',
          },
        }

        createNode(newNode)
        return true
      })
  })

  await Promise.all(collectionsPromises)
}

exports.sourceNodes = async (gatsbyFunctions) => {
  const collections = [`5184832`, `1978309`, `144033`]

  await getUnsplashPhotos(gatsbyFunctions, collections)
  await getUnsplashCollections(gatsbyFunctions, collections)

}