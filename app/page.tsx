'use client';
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import _ from'lodash'
// const HarvyCompoent=dynamic(()=>import('./components/harvycompoent'),
// {ssr:false,
//   loading:()=><p>loading。。。</p>})

export default function Home() {
  // const session=await getServerSession(authOption);
  // const [isvisible,setisvisible]= useState(false);
  return (
    <main className="relative w-screen h-screen">
      {/* <h1>hello {session&&<span>{session.user!.name}</span>}</h1>
      <Link href='./users'>users</Link>
      <ProductCard />  */}
      {/* <Image src="/images/img_3496.jpg" 
      alt="Wenjing"
      className='object-cover'
      fill 
      sizes='(max-width:490px)100vw,(max-width:768px)50vw,33vw'
      quality={75}
      priority
      /> */}
      <p>hello word</p>
      <button onClick={async()=>
        {
          const _ =(await import('lodash')).default;
          const users=[
            {name:'a'},
            {name:'b'},
            {name:'c'},
          ]
          const sorted=_.orderBy(users);
          console.log(sorted)
        }
      }>show</button>
    </main>
  )
}