import { sanityClient } from '../lib/sanity/client'
import { indexQuery } from '../lib/sanity/queries'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PostsSection from '../components/PostsSection'

export default function Home(props) {
  const allPosts = props?.allPosts.map((post) => ({
    id: post._id,
    slug: post.slug,
    title: post.title,
    date: post._createdAt,
  }))

  if (!allPosts) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <article className="main-article">
        <Container>
          <PostsSection title="Latest Articles" posts={allPosts} />
        </Container>
      </article>
    </Layout>
  )
}

// This also gets called at build time
// Pass post data to the page via props
export async function getStaticProps({ preview = false }) {
  const allPosts = await sanityClient.fetch(indexQuery)
  return {
    props: { allPosts, preview },
  }
}
