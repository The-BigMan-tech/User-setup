'use client'
import { StepFlex,Heading,Instruction,NextButton} from "./step-1" 
import { GoBack } from "./step-2"
import {Link,useLocation} from 'react-router-dom'
import tw from 'tailwind-styled-components'
import queryString from "query-string"
export default function Step4() {
    const NextButton4 = tw(NextButton)`
        bg-[#483eff]
    `
    return (
        <>
        <StepFlex>
            <Heading>Finishing up</Heading>
            <Instruction>Double check if everything looks ok before confirming</Instruction>
        </StepFlex>
        <Link to="/thankyou"><NextButton4>Confirm</NextButton4></Link>
        <Link to='/step-4'><GoBack>GoBack</GoBack></Link>
        </>
    )
}