import { NextRequest, NextResponse } from "next/server";
import {z} from'zod'
import {prisma}from '@/prisma/client'
import bcrypt from'bcrypt'

const schema=z.object({
    email:z.email(),
    password:z.string().min(5),
}) 

export async function POST(request:NextRequest){
   const body= await request.json();
   const validetion=  schema.safeParse(body);
   if(!validetion.success)
    return  NextResponse.json(validetion.error,{status:400})
   const user= await prisma.user.findUnique({
    where:{email:body.email}
   })
   if(user)
    return NextResponse.json({error:'user already exists'},{status:400})
   const hashpassword=await bcrypt.hash(body.password,10)
   const newUser=await prisma.user.create({
    data:{
        email:body.email,
        hashpassword,
    } 
   })
   return NextResponse.json({email:newUser.email});
}