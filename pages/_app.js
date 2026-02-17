import '../styles/globals.css'

import { DefaultSeo } from 'next-seo'
import { appWithTranslation } from 'next-i18next'

import SEO from '../next-seo.config.js'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

import { Analytics } from '@vercel/analytics/next'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ProgressBar height="4px" color="#10b981" options={{ showSpinner: false }} shallowRouting />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default appWithTranslation(MyApp)
