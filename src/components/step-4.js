'use client'
import { StepFlex,Heading,Instruction,NextButton} from "./step-1" 
import { GoBack } from "./step-2"
import {Link} from 'react-router-dom'
export default function Step4() {
    return (
        <>
        <StepFlex>
            <Heading>Finishing up</Heading>
            <Instruction>Double check if everything looks ok before confirming</Instruction>
        </StepFlex>
        <Link to="/step-4"><NextButton>Confirm</NextButton></Link>
        <Link to="/step-3"><GoBack>GoBack</GoBack></Link>
        </>
    )
}