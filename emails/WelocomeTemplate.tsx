import React from 'react'
import {Html,Body,Container,Text,Preview,Link,Tailwind} from '@react-email/components'

const WelocomeTemplate = ({name}:{name:string}) => {
  return (
    <Html>
      <Preview>welocome aboard!</Preview>
      <Tailwind>
      <Body className='bg-white'>
        <Container>
          <Text className='font-[700] text-3xl'>hello {name}</Text>
          <Link href='www.baidu.com'>baidu</Link>
        </Container>
      </Body>
      </Tailwind>
    </Html>
  )
}

export default WelocomeTemplate