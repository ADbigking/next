'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'

// 动态导入组件，禁止 SSR
const CldUploadWidget = dynamic(
  () => import('next-cloudinary').then((mod) => mod.CldUploadWidget),
  { ssr: false }
)
const CldImage = dynamic(
  () => import('next-cloudinary').then((mod) => mod.CldImage),
  { ssr: false }
)

interface Cloudinery {
  public_id: string
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('')

  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="a wenjing"
        />
      )}

      <CldUploadWidget
        uploadPreset="aodu123"
        options={{
          cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
          sources: ['local'],
          multiple: true,
          maxFiles: 5,
          cropping: false
        }}
        onSuccess={(result) => {
          if (result.event !== 'success') return
          const info = result.info as Cloudinery
          setPublicId(info.public_id)
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  )
}

export default UploadPage