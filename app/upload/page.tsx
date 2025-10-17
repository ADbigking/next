'use client'
export const dynamic = "force-dynamic";
import React, { useState } from 'react'
import {CldUploadWidget,CldImage } from"next-cloudinary"
interface cloudinery{
    public_id:string
}

const UploadPage = () => {
    const [publicId,setpublicId]=useState('');
  return (
    <>
    {publicId &&
    <CldImage src={publicId} width={270} height={180} alt='a wenjing'/>}
    <CldUploadWidget uploadPreset='aodu123'
    options={{
        cloudName:'aodu123',
        sources:['local'],
        multiple:true,
        maxFiles:5,
        cropping:false,
    }}
     onSuccess={(result)=> 
    {if(result.event!=='success') return
        const info=result.info as cloudinery
        setpublicId(info.public_id)
    }}>
        {({open})=><button className='btn btn-primary' onClick={()=>open()}>upload</button>}
    </CldUploadWidget>
    </>
  )
}

export default UploadPage 