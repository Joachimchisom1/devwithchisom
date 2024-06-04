import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import ProfileImg from '../../public/images/profile/developer-pic-1.png'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/skills'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Devwithchisom | About Page</title>
        <meta name="About Chisom Joachim" content="" />
      </Head>
      <TransitionEffect />
      <main className="flex w-2-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Ignites Purpose!" className="mb-16 dark:text-light
          lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 dark:text-light
          ">
            <div className="col-span-3 flex flex-col items-start justify-center
            sm:gap-8 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About Me
              </h2>
              <p className="font-medium pt-2">
                I'm Chisom Joachim, a Software Engineer and Entrepreneur. I've
                spent most of my waking hours for the last Six years designing,
                programming and operating as a Software Engineer, Freelance Web
                Developer, Graphics Designer.
              </p>
              <p className="font-medium pt-4">
                If you want some extra customization for your page, or you want
                someone to set it up the first time, I'm your guy! For the past
                6+ years, I've been creating websites for businesses of all
                sizes. No project is too big or too small. My specialty is to
                consult with you to set up and design your page and then train
                and hand off the page for you to continue on your own with
                minimal help going forward. I'm also available to do recurring
                work updating your page regularly as well as one on one training
                sessions.
              </p>
              <p className="font-medium pt-4">
                One of my specialties is taking an idea from scratch and
                creating a full-fledged platform. I go beyond to produce sites
                with a unique, outstanding, contemporary look-and-feel. With
                extensive knowledge of web mechanics, I'm able to optimize
                complex integrations to require little-to-no maintenance while
                running on their own for years.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
               bg-light p-10 shadow-[5px_5px_5px_5px_#1a202c] xl:col-span-4 md:order-1 md:col-span-8
            "
            >
              {/* <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark" /> */}
              <FramerImage
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                src={ProfileImg}
                alt="Devwithchisom"
                className="w-full h-auto rounded-2xl shadow-lg dark:bg-dark"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between
            xl:col-span-8 xl:flex-row xl:items-center md:order-3 ">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold 
                md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold
                md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={60} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  project completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold
                md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </>
  )
}

export default about
