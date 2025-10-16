import React from 'react'
import UsersTable from './UsersTable' 
import Link from 'next/link'

interface Props {
  searchParams: Promise<{ sortOrder: string }>
}

const UserPage = async ({ searchParams }: Props) => {
  const { sortOrder } = await searchParams; // 直接解构
  
  return (
    <>
      <h1>users</h1>
      <Link href='/users/new' className='btn'>new users</Link>
      <UsersTable sortOrder={sortOrder} />
    </>
  )
}

export default UserPage