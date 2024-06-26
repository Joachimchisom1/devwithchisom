import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Img1 from '../../public/images/projects/project1.jpg'
import Img2 from '../../public/images/projects/project2.jpg'
// import Img3 from '../../public/images/projects/crypto-screener-cover-image.jpg'
// import Img4 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-16 shadow-[5px_5px_5px_5px_#1a202c]
    dark:bg-dark dark:border-light 
    lg:flex-col lg:p-8 xs:rounded-2xl
     xs:rounded-br-3xl xs:p-4"
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg
        lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div
        className="w-1/2 flex flex-col items-start justify-between pl-6 
      lg:w-full lg:pl-0 lg:pt-6"
      >
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-dark text-left text-4xl 
          font-bold dark:text-light sm:text-sm"
          >
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark1 dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light
             p-2 px-6 text-lg font-semibold 
             dark:bg-light dark:text-dark
             sm:px-4 sm:text-base"
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative
    shadow-[3px_3px_4px_4px_#1a202c] dark:bg-dark dark:border-light
    xs:p-4 md:-right-2"
    >
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-dark text-left text-3xl 
          font-bold dark:text-light sm:text-sm"
          >
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg rounded-lg bg-dark text-light  p-2 px-6 font-semibold dark:bg-light dark:text-dark"
          >
            View
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            {' '}
            <GithubIcon />{' '}
          </Link>
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Chisom Joachim | Devwithchisom | Projects</title>
        <meta name="My Projects" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:bg-dark">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 dark:text-light 
            lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div
            className="grid grid-cols-12 gap-24 gap-y-32 dark:text-light 
          xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0"
          >
            <div className="col-span-12">
              <FeaturedProject
                title="FlickFusion Movies Recommendation  Website"
                img={Img1}
                summary="FlickFusion is a cutting-edge movie recommendation website designed to help you discover your next favorite film. 
                Our platform combines the power of artificial intelligence, 
                machine learning, and a vast movie database to provide 
                personalized suggestions tailored to your unique tastes.
"
                link="https://moviix-plum.vercel.app/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Casedev - Your Image on a Custom Phone Case"
                img={Img2}
                summary="with Casedaev, you and Capture your favorite memories with your own, phone case. 
                casedev allows you to protect your memories, not just your phone case."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="FlickFusion Movies Recommendation  Website"
                img={Img1}
                summary="FlickFusion is a cutting-edge movie recommendation website designed to help you discover your next favorite film. 
                Our platform combines the power of artificial intelligence, 
                machine learning, and a vast movie database to provide 
                personalized suggestions tailored to your unique tastes."
                link="https://moviix-plum.vercel.app/"
                github="/"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
