'use client'
import tw from 'tailwind-styled-components'
import queryString from 'query-string'
import {Link,useLocation} from 'react-router-dom'
import {useState} from 'react'


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
    outline-[1.5px] outline outline-[#9c9aa5] h-10 font-bold font-[Consolas] text-[#9c9da3] border-2 border-transparent rounded-md focus:text-black focus:outline-[#8b82da] focus:font-[Sengoe_UI]
`
export const NextButton = tw.button`
    bg-[#798798] text-white w-24 h-12 font-[Consolas] border-2 border-transparent rounded-md fixed bottom-12 right-56 
`
export default function Step1() {
    const location = useLocation();
    const passed_query = queryString.parse(location.search)
    console.log("QUERY ON 1",passed_query)

    const NextButton1 = tw(NextButton)`
        ${(props)=>((props.$name.length != 0) && (props.$email.length != 0) && (props.$phoneNum.length != 0))?'bg-[#02295a]':null}
    `
    function validateInput() {
        //*Implement later
    }
    const [name,setName] = useState((passed_query.nameData)?passed_query.nameData:'')
    function recordName(event) {
        setName(event.target.value)
    }
    const [email,setEmail] = useState((passed_query.emailData)?passed_query.emailData:'')
    function recordEmail(event) {
        setEmail(event.target.value)
    }
    const [phoneNum,setPhoneNum] = useState((passed_query.phoneData)?passed_query.phoneData:'')
    function recordPhoneNum(event) {
        setPhoneNum(event.target.value)
    }
    const first_data = queryString.stringify({nameData:name,emailData:email,phoneData:phoneNum})
    let next = <NextButton1 onClick={validateInput} $name={name} $email={email} $phoneNum = {phoneNum}>Next</NextButton1>
    if ((name.length != 0) && (email.length != 0) && (phoneNum.length != 0)) {
        next = <Link to={`/step-2?${first_data}`}>{next}</Link>
    }
    return(
        <>
        <StepFlex>
            <Heading>Personal info</Heading>
            <Instruction>Please,provide your name,email address and phone number</Instruction>
            <Form>
                <Label>Name</Label>
                <InputBox onChange={recordName} value={name} placeholder="  eg Stephen King"/>
            </Form>
            <Form>
                <Label>Email address</Label>
                <InputBox onChange={recordEmail} value={email} placeholder="  eg somebody@gmail.com"/>
            </Form>
            <Form>
                <Label>Phone number</Label>
                <InputBox onChange={recordPhoneNum} value={phoneNum} placeholder="  eg +234 876 222 129"/>
            </Form>
        </StepFlex>
        {next}
        </>
    )
}