import Head from 'next/head'
import Image from 'next/image'
import getConfig from 'next/config'
import styles from './layout.module.scss'
// import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

const name = 'rudisimo'
export const siteDescription = ''
export const siteTitle = 'Next.js Sample Website'
export const siteUri = ''
const { _, publicRuntimeConfig } = getConfig()

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  console.log(require("../public/images/logo.png").default.src)

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="og:title" content={siteTitle} />
        <meta name="og:type" content="website" />
        <meta name="og:url" content={siteUri} />
        <meta name="og:image" content={require("../public/images/logo.png").default.src} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="image_src" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {children}
      </div>
    </>
  )
}
