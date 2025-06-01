import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'

<Script
  data-name="BMC-Widget"
  data-cfasync="false"
  src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
  data-id="joachimchisom"
  data-description="Support me on Buy me a coffee!"
  data-message="Thanks for your visit, You can buy me a Cafe!"
  data-color="#FF813F"
  data-position="Right"
  data-x_margin="18"
  data-y_margin="18"
></Script>

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

export default function App({ Component, pageProps }) {
  const router = useRouter
  return (
    <>
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="../../public/images/profile/wakimkings.png" />
        </Head>
      </>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark relative w-full min-h-screen`}
      >
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}
