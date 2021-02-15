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
