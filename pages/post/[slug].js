import { sanityClient } from '../../lib/sanity/client'
import { postQuery, postSlugsQuery } from '../../lib/sanity/queries'
import { urlForImage } from '../../lib/sanity/util'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostHeader from '../../components/PostHeader'
import PostBody from '../../components/PostBody'
import Container from '../../components/Container'
import SEO from '../../components/SEO'

export default function Post(props) {
  const router = useRouter()

  const slug = props?.data?.post?.slug?.current
  const post = props?.data?.post

  if (!router.isFallback && !slug && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <article className="main-article">
          <Container>
            <SEO
              description={post.description}
              image={urlForImage(post.mainImage)
                .width(1200)
                .height(627)
                .fit('crop')
                .url()}
              url={`/posts/${slug}`}
              title={post.title}
            />
            <PostHeader
              title={post.title}
              coverImage={post.mainImage.asset}
              date={post._createdAt}
              author={{
                name: post.authorName,
                picture: post.authorImage.asset,
              }}
              tags={post.categories}
            />
            <PostBody content={post.body} />
          </Container>
        </article>
      )}
    </Layout>
  )
}

// This also gets called at build time
// Pass post data to the page via props
export async function getStaticProps({ params, preview = false }) {
  const post = await sanityClient.fetch(postQuery, {
    slug: params.slug,
  })

  return {
    props: {
      preview,
      data: {
        post,
      },
    },
  }
}

// This function gets called at build time
// We'll pre-render only these paths at build time
export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}
