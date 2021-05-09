export const postQuery = `
*[_type == "post" && slug.current == $slug][0] {
  _id, _createdAt, title, slug, body,
  mainImage {  
    asset -> {
      _id, url
    }
  },
  categories[]-> {
    title
  },
  "authorName": author->name,
  "authorImage": author->image
}`

export const postSlugsQuery = `
*[_type == "post" && 
  defined(slug.current)][].slug.current`

const postFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  _createdAt,
  _updatedAt,
  "slug": slug.current,
  "author": author->{name, picture},
`

export const indexQuery = `
*[_type == "post"] | order(_createdAt desc, _updatedAt desc) {
  ${postFields}}
`
