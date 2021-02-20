import BlockContent from '@sanity/block-content-to-react'
import React from 'react'
import CodeSnipper from '../components/CodeSnipper'
import Quote from '../components/Quote'
import BlockQuote from '../components/BlockQuote'

const serializer = {
  marks: {
    code: (props) => {
      return <Quote quote={props.children.join('')} />
    },
  },
  types: {
    block: (props) => {
      const { style = 'normal' } = props.node
      const className = ''

      if (style === 'blockquote') {
        return <BlockQuote quote={props.children.join('')} />
      }

      return <p>{React.createElement(style, className, props.children)}</p>
    },
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
