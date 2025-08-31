import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light sm:text-base"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6
      ">
        <div className="flex items-center lg:py-2">
          Build with{' '}
          <spain className="text-primary text-2xl px-1">&#9825;</spain>
          by&nbsp;
          <Link href="https://www.upwork.com/freelancers/~01216f560cc28c4c05" className='underline
          underline-offset-2
          '>Chisom Joachim</Link>
        </div>
        <spain>{new Date().getFullYear()} &copy; All Right Reserved.</spain>     
        <Link href="https://wa.link/z00363" target={"_blank"} className='underline
          underline-offset-2
          '>Say Hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer
