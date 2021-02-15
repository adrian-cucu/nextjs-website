import BlockContent from '@sanity/block-content-to-react'
import CodeSnipper from '../components/CodeSnipper'
import Quote from '../components/Quote'

const serializer = {
  marks: {
    code: (props) => {
      return <Quote quote={props.children.join('')} />
    },
  },
  types: {
    code: (props) => (
      <CodeSnipper
        lang={props.node.language}
        code={props.node.code}
        theme="sunburst"
      />
    ),
  },
}

export default function PostBody({ content }) {
  return (
    <div className="main-article-body">
      <BlockContent blocks={content} serializers={serializer} />
    </div>
  )
}
