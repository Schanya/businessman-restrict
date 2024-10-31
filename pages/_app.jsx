import { GoogleTagManager } from "@next/third-parties/google";

import '../globals.css'

function App({ Component, pageProps }) {
  return <><Component {...pageProps} />
  <GoogleTagManager gtmId="GTM-WJ8S9WT7" />
  </>
}

export default App