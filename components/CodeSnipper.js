import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript'
import docco from 'react-syntax-highlighter/dist/cjs/styles/hljs/docco'

function CustomPreTag({ children, _language }) {
  return (
    <div className="code-wrapper flex-col">
      <div className="code-lang-wrapper">
        <span className="code-lang">{_language}</span>
      </div>
      <pre className={'hljs language-' + _language}>{children}</pre>
    </div>
  )
}

export default function CodeSnipper({ lang, code, theme }) {
  SyntaxHighlighter?.supportedLanguages?.map((lan, inx) => {})

  return (
    <SyntaxHighlighter
      language={lang}
      // customStyle={{borderRadius : "1rem"}}
      // codeTagProps={{language: lang}}
      useInlineStyles={false}
      showLineNumbers={true}
      startingLineNumber={1}
      PreTag={CustomPreTag}
      _language={lang}
      style={docco}
    >
      {code}
    </SyntaxHighlighter>
  )
}
