import Link from 'next/link'
import PostsList from '../components/PostsList'

export default function PostsSection({ title, posts }) {
  return (
    <section>
      <div className="section-title flex jc-space" style={{flexWrap: 'wrap'}}>
        <h3>{title}</h3>
        <Link href="/blog">
          <a className="section-view-all" aria-label="View all articles">
            View all
          </a>
        </Link>
      </div>
      <PostsList posts={posts} />
    </section>
  )
}
