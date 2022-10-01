import React from 'react'
import WebXLayout from '../layouts/WebXLayout'
import '../styles/globals.css'
import SEO from '../../next-seo.config'
import { DefaultSeo } from 'next-seo'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <WebXLayout>
        <Component {...pageProps} />
      </WebXLayout>
    </>
  )
}

export default MyApp
