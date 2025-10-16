'use client'
import React from 'react'

interface Props {
  error:Error
  reset:()=>void
}

const UsersErrorPage = ({error,reset }:Props) => {
  return (
    <>
    <div>这是一个局部的Error错误</div>
    <button className='btn' onClick={()=>reset()}>retry</button>
    </>
  )
}

export default UsersErrorPage