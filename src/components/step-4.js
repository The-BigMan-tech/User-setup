'use client'
import { StepFlex,Heading,Instruction,NextButton} from "./step-1" 
import { GoBack } from "./step-2"
import {Link} from 'react-router-dom'
import tw from 'tailwind-styled-components'
export default function Step4() {
    const NextButton4 = tw(NextButton)`
        bg-[#02295a]
    `
    return (
        <>
        <StepFlex>
            <Heading>Finishing up</Heading>
            <Instruction>Double check if everything looks ok before confirming</Instruction>
        </StepFlex>
        <Link to="/step-4"><NextButton4>Confirm</NextButton4></Link>
        <Link to="/step-3"><GoBack>GoBack</GoBack></Link>
        </>
    )
}