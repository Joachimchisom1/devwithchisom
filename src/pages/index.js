import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Image from 'next/image'
import ProfilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import LightBuld from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Chisom Joachim | Devwithchisom | Home Page</title>
        <meta name="Chisom Joachim" content="" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:bg-dark ">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={ProfilePic}
                alt="Devwithchisom"
                className="w-full h-auto"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 50vw lg:hidden md:inline-block md:w-ful"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center dark:text-light
            lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left pt-5 dark:text-light xl:!text-5xl
                lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise 
              </p>
              <div className="flex items-center self-start mt-2 gap-6 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target={'_blank'}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:border-dark1
                md:p-2 md:px-4 md:text-base"
                download={true}
                >
                  Resume <LinkArrow className='w-6 ml-1 ' />
                </Link>
                <Link href="mailto:devwithchisom@gmail.com" target={'_blank'} className='text-lg font-medium capitalize text-dark dark:text-light underline
                md:text-base'>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={LightBuld} alt="Devwithchisom" className='w-full h-auto' priority />
        </div>
      </main>
    </>
  )
}
