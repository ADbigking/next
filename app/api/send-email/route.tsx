import WelocomeTemplate from '@/emails/WelocomeTemplate';
import {Resend}from'resend';

const resend=new Resend(process.env.RESEND_API_KEY);
export async function POST(){
await resend.emails.send({
    from:'',
    to:'1281963229@qq.com',
    subject:'...',
    react:<WelocomeTemplate name='aodu'/>
})
}