import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        </Head>
        <body>
        <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                    var storageKey = 'theme';
                    var classNameDark = 'dark';
                    var classNameLight = 'light';
                  
                    function setClassOnDocumentBody(inputTheme) {
                        if (inputTheme === classNameDark) {
                            document.body.classList.add(classNameDark);
                            document.body.classList.remove(classNameLight); 
                        } else {
                            document.body.classList.add(classNameLight);
                            document.body.classList.remove(classNameDark); 
                        }
                    //   document.body.classList.add(darkMode ? classNameDark : classNameLight);
                    //   document.body.classList.remove(darkMode ? classNameLight : classNameDark);
                    }
                    
                    var preferDarkQuery = '(prefers-color-scheme: dark)';
                    var mql = window.matchMedia(preferDarkQuery);
                    var supportsColorSchemeQuery = mql.media === preferDarkQuery;
                    var localStorageTheme = null;
                    try {
                      localStorageTheme = localStorage.getItem(storageKey);
                    } catch (err) {}
                    setClassOnDocumentBody(localStorageTheme);
                    
                    // var localStorageExists = localStorageTheme !== null;
                    // if (localStorageExists) {
                    //   localStorageTheme = JSON.parse(localStorageTheme);
                    // }

                    // console.log(localStorageTheme)
                  
                    // // Determine the source of truth
                    // if (localStorageExists) {
                    //   // source of truth from localStorage
                    //   setClassOnDocumentBody(localStorageTheme);
                    // } else if (supportsColorSchemeQuery) {
                    //   // source of truth from system
                    //   setClassOnDocumentBody(mql.matches);
                    //   localStorage.setItem(storageKey, mql.matches);
                    // } else {
                    //   // source of truth from document.body
                    //   var isDarkMode = document.body.classList.contains(classNameDark);
                    //   localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
                    // }
                })()
            `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
