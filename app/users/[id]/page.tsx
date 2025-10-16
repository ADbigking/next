import { notFound } from 'next/navigation'
import React from 'react'

interface Props{
    params:Promise<{id:number}>
}
const UserDatailPage = async({params}:Props) => {
  const {id}=await params;
  if(id>10) notFound();
  return (
    <div>UserDatailPage{id}</div>
  )
}
export default UserDatailPage