import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript'
import docco from 'react-syntax-highlighter/dist/cjs/styles/hljs/docco'

function CustomPreTag({ children, _language }) {
  return (
    <div className="pre-code-wrapper">
      <div
        style={{ position: 'relative', minHeight: '2.5rem', marginTop: '2rem' }}
      >
        <div className="pre-language">{_language}</div>
      </div>
      <pre className={'hljs language-' + _language}>{children}</pre>
    </div>
  )
}

export default function CodeSnipper({ lang, code, theme }) {
  SyntaxHighlighter?.supportedLanguages?.map((lan, inx) => {})

  return (
    <>
      <SyntaxHighlighter
        language={lang}
        // customStyle={{borderRadius : "1rem"}}
        // codeTagProps={{language: lang}}
        useInlineStyles={false}
        showLineNumbers={true}
        startingLineNumber={1}
        PreTag={CustomPreTag}
        _language={lang}
        // style={dark}
      >
        {code}
      </SyntaxHighlighter>
    </>
  )
}
