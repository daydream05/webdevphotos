export default {
  type: 'document',
  name: 'photo',
  title: 'Photo',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'mainImage',
      title: 'Image',
      type: 'mainImage'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'tag' }
          ]
        }
      ],
      options: {
        layout: 'tags'
      }
    }
  ]
}