import Link from 'next/link'
import { parseShortDate } from '../lib/sanity/util'

export default function PostsList({ posts }) {
  if (!posts || posts.length == 0) {
    return <h2>No posts found</h2>
  }

  return posts.map((post, idx) => {
    return (
      <div className="post" key={post.id}>
        <Link href={`/post/${post.slug}`} key={idx}>
          <a aria-label={post.slug}>
            <div className="post-row">
              <time dateTime={post.date}>{parseShortDate(post.date)}</time>
              <h3>{post.title}</h3>
            </div>
          </a>
        </Link>
      </div>
    )
  })
}
