import Head from 'next/head'
// import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      {/* <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} key="ogImage" /> */}
      <meta name="msapplication-TileColor" content="#1c2237" />
      <meta name="theme-color" content="#000" />
      <meta name="viewport" content="width=500, initial-scale=1"></meta>
      <meta
        name="description"
        content={`A statically generated blog example using Next.js and Sanity.io}.`}
      />
    </Head>
  )
}
