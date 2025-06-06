import React from 'react'
import { motion } from "framer-motion"

const Skill = ({ name, x, y }) => {
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
      py-3 px-6 shadow-dark cursor-pointer absolute
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3
      xs:bg-transparent xs:dark:bg-transparent xs:text-dark 
      xs:dark:text-light xs:font-bold'
      whileHover={{ scale: 1.05 }}
      initial={{x:0, y:0}}
      whileInView={{x:x, y:y}}
      transition={{duration: 1.5}}
      viewport={{once: true}}
    >
      {name}
    </motion.div>
  )
}

const skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center dark:text-light md:text-6xl md:mt-32'>My Skills</h2>
      <div className="w-full h-screen relative flex items-center 
      justify-center rounded-full bg-circularLight
       dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
       lg:bg-circularLightLg lg:bg-circularDarkLg
       md:bg-circularLightLg md:bg-circularDarkLg
       sm:bg-circularLightLg sm:bg-circularDarkLg
       md:text-light">
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer
        lg:p-6 md:p-4 xs:text-xs xs:p-2'
          whileHover={{ scale: 1.05 }}
        >
          DEVs.
        </motion.div>
        <Skill name="HTML" x="-28vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="10vw" />
        <Skill name="JAVASCRIPT" x="20vw" y="6vw" />
        <Skill name="REACTJS" x="7vw" y="12vw" />
        <Skill name="FIGMA" x="-20vw" y="-15vw" />
        <Skill name="PHP" x="-15vw" y="12vw" />
        <Skill name="PYTHON" x="32vw" y="-5vw" />
        <Skill name="Laravel" x="13vw" y="-6vw" />
        <Skill name="ROS" x="-20vw" y="-20vw" />
        <Skill name="C++" x="-30vw" y="-18vw" />
        <Skill name="PROJECT MANAGMENT" x="18vw" y="-18vw" />
        <Skill name="FLUTTER" x="18vw" y="-12vw" />
        <Skill name="FIREBASE" x="-16vw" y="0vw" />
        <Skill name="SQL" x="0vw" y="-12vw" />
        <Skill name="Digital Marketing" x="-21vw" y="-13vw" />
      </div>
    </>
  )
}

export default skills