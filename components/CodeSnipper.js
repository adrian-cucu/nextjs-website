import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript'
import docco from 'react-syntax-highlighter/dist/cjs/styles/hljs/docco'
import { MdContentCopy } from 'react-icons/md'
import { useState } from 'react'

export default function CodeSnipper({ language, code, theme }) {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false)

  const copyToClipboard = () => {
    if (!copiedToClipboard) {
      if (typeof code === 'string' && code.length > 0) {
        navigator.clipboard.writeText(code)
        setCopiedToClipboard(true)
      }
    }
  }

  return (
    <div className="code-wrapper">
      <span className="code-lang" title="Code language">
        {language}
      </span>
      <span
        className={
          copiedToClipboard
            ? 'code-lang code-copy-clipboard-btn clicked'
            : 'code-lang code-copy-clipboard-btn'
        }
        title="Copy code to clipboard"
        onTransitionEnd={(e) => {
          copiedToClipboard ? setCopiedToClipboard(false) : undefined
        }}
      >
        <MdContentCopy
          className="code-copy-clipboard"
          onClick={copyToClipboard}
        />
      </span>
      <SyntaxHighlighter
        className={'language-' + language}
        language={language}
        // customStyle={{borderRadius : "1rem"}}
        // codeTagProps={{language: lang}}
        useInlineStyles={false}
        showLineNumbers={true}
        startingLineNumber={1}
        style={docco}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
