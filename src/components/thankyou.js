'use client'
import { Heading } from './step-1'
import tw from 'tailwind-styled-components'
const Thanks = tw(Heading)`
    font-[Consolas] mb-6
`
const ThanksFlex = tw.div`
    flex flex-col justify-center items-center w-[28rem] relative left-14
`
const ThanksPar = tw.p`
    text-center leading-6 font-[Arial] text-[#a0a1a4]
`
const ThanksImg = tw.img`
    w-24 h-24 relative bottom-10 border-4 border-red-100 rounded-full p-4 shadow-lg
`
export default function Thankyou() {
    return(
        <>
        <ThanksFlex>
            <ThanksImg src="/assets/images/check-solid.svg"/>
            <Thanks>Thank you</Thanks>
            <ThanksPar>
                Thanks for coming for the subscription!We hope you have fun using our platform.If you ever need support,please free to email us at support @something.gmail.com
            </ThanksPar>
        </ThanksFlex>
        </>
    )
    
}