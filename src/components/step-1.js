'use client'
import tw from 'tailwind-styled-components'
import {Link} from 'react-router-dom'

export const Heading = tw.h1`
    text-4xl font-bold font-[Verdana] text-[#072a5e] mb-7
`
export const StepFlex = tw.div`
    flex flex-col relative
`
export const Instruction = tw.p`
    text-[#9f9fa3] font-[Segoe_UI] text-lg mb-2
`
const Form = tw.form`
    flex flex-col gap-3 mt-3
`
const Label = tw.label`
    text-[#3e5673] font-[Consolas] text-lg
`
const InputBox = tw.input`
    outline-[1.5px] outline outline-[#9c9aa5] h-10 font-bold font-[Consolas] text-[#9c9da3] border-2 border-transparent rounded-md focus:text-black
`
export const NextButton = tw.button`
    bg-[#02295a] text-white w-24 h-12 font-[Consolas] border-2 border-transparent rounded-md fixed bottom-12 right-56
`
export default function Step1() {
    return(
        <>
        <StepFlex>
            <Heading>Personal info</Heading>
            <Instruction>Please,provide your name,email address and phone number</Instruction>
            <Form>
                <Label>Name</Label>
                <InputBox placeholder="  eg Stephen King"/>
            </Form>
            <Form>
                <Label>Email address</Label>
                <InputBox placeholder="  eg somebody@gmail.com"/>
            </Form>
            <Form>
                <Label>Phone number</Label>
                <InputBox placeholder="  eg +234 876 222 129"/>
            </Form>
        </StepFlex>
        <Link to="/step-2"><NextButton>Next</NextButton></Link>
        </>
    )
}