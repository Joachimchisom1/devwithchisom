import React from 'react'
// import {CircularText} from "./Icons"
// import Image from 'next/image'
// import Link from 'next/link'

const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4
    flex items-center overflow-hidden
    md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute
    sm:right-0"
    >
      <div className="w-48 h-auto items-center justify-center reltive
      md:w-24">
        {/* <Image src={CircularText} /> */}
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light md:fill-light"}  />
      </div>
    </div>
  )
}

export default HireMe
