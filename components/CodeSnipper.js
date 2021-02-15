import Highlight from 'react-highlight.js'

export default function CodeSnipper({ lang, code, theme }) {
  const THEMES = [
    'atom-one-light',
    'atom-one-dark',
    'mono-blue',
    'github',
    'hybrid',
    'sunburst',
  ]
  const codeTheme = THEMES.includes(theme) ? theme : THEMES[0]
  // https://highlightjs.org/static/demo/styles/sunburst.css

  return (
    <>
      <div>
        <Highlight language={lang}>{code}</Highlight>
      </div>
    </>
  )
}
