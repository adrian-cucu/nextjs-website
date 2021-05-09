import Link from 'next/link'
import { parseShortDate } from '../lib/sanity/util'

export default function PostsSection({ title, posts }) {
  return (
    <section>
      <h2 className="section-title">{title}</h2>
      <Link href="/blog">
        <a className="section-view-all" aria-label="View all articles">
          View all
        </a>
      </Link>
      {posts &&
        posts.map((post, idx) => {
          return (
            <div className="post" key={post.id}>
              <Link href={`post/${post.slug}`} key={idx}>
                <a aria-label={post.slug}>
                  <div className="post-row">
                    <time dateTime={post.date}>
                      {parseShortDate(post.date)}
                    </time>
                    <h3>{post.title}</h3>
                  </div>
                </a>
              </Link>
            </div>
          )
        })}
    </section>
  )
}
