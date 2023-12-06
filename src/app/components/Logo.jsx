import Image from 'next/image'
import React from 'react'

const Logo = ({size = 60}) => {
  return (
    <Image src={"/logo/logo192x192.png"} alt='' width={size} height={size}/>
  )
}

export default Logo