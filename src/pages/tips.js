import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import TipImg1 from '../../public/images/articles/pagination component in reactjs.jpg'
import TipImg2 from '../../public/images/articles/create loading screen in react js.jpg'
import TipImg3 from '../../public/images/articles/form validation in reactjs using custom react hook.png'
import TipImg4 from '../../public/images/articles/smooth scrolling in reactjs.png'
import TipImg5 from '../../public/images/articles/create modal component in react using react portals.png'
import TipImg6 from '../../public/images/articles/todo list app built using react redux and framer motion.png'
import TipImg7 from '../../public/images/articles/What is Redux with easy explanation.png'
import TipImg8 from '../../public/images/articles/What is higher order component in React.jpg'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const MovingImg = ({ title, img, link }) => {
  // Obtain the position of the curser......
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef(null)

  // Show image if the curser reach the title
  function handleMouse(e) {
    imgRef.current.style.display = 'inline-block'
    x.set(e.pageX)
    y.set(-10)
  }

  // stop showing image if the curser leaves the title
  function handleMouseLeave(e) {
    imgRef.current.style.display = 'none'
    x.set(0)
    y.set(0)
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{opacity:0}}
        whileInView={{opacity:1, transition:{duration: 0.2}}}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto
      hidden absolute rounded-lg"
      />
    </Link>
  )
}

const Tip = ({ img, title, date, link }) => {
  return (
    <motion.li
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
    viewport={{once: true}}
    className="relative w-full p-4 py-6 my-4 rounded-xl 
    flex items-center justify-between bg-light text-dark 
    first:mt-0 border border-solid border-dark
    border-r-4 border-b-4 dark:border-light dark:text-light dark:bg-dark
    sm:flex-col"

    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">{date}</span>
    </motion.li>
  )
} 

const FeaturedTips = ({ img, title, time, summary, link }) => {
  return (
    <li
      className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl
    shadow-[5px_5px_4px_4px_#1a202c] dark:border-light dark:text-light dark:bg-dark
    "
    >
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline
        xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold hover:underline">{time}</span>
    </li>
  )
}

const tips = () => {
  return (
    <>
      <Head>
        <title>Chisom Joachim | Devwithchisom | Tips Page</title>
        <meta name="About Chisom Joachim" content="" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:bg-dark">
        <Layout className="mb-16">
          <AnimatedText text="Words Can Change The World!" 
          className="mb-16 dark:text-light
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <ul className="grid grid-cols-2 gap-16
          lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedTips
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="
            Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
            "
              time="9 min read"
              link="/"
              img={TipImg1}
            />
            <FeaturedTips
            
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              summary="
              Learn how to create stunning loading screens in React with 3 different methods. 
              Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
              Improve the user experience.
            "
              time="10 min read"
              link="/"
              img={TipImg2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center text-dark dark:text-light my-16 mt-32">
            All Tips
          </h2>
          <ul>
            <Tip
              title="Form Validation In Reactjs: 
              Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 22, 2024"
              link="/"
              img={TipImg3}
            />
            <Tip
              title="Silky Smooth Scrolling In Reactjs: 
              A Step-By-Step Guide For React Developers"
              date="March 22, 2024"
              link="/"
              img={TipImg4}
            />
            <Tip
              title="Creating An Efficient Modal Component In React Using Hooks And Portals"
              date="March 22, 2024"
              link="/"
              img={TipImg5}
            />
            <Tip
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              date="March 22, 2024"
              link="/"
              img={TipImg6}
            />
            <Tip
              title="Redux Simplified: A Beginner's Guide For Web Developers"
              date="March 22, 2024"
              link="/"
              img={TipImg7}
            />
            <Tip
              title="What Is Higher Order Component (Hoc) In React?"
              date="March 22, 2024"
              link="/"
              img={TipImg8}
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default tips
