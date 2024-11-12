import { StepFlex,Heading,Instruction,NextButton} from './step-1'
import tw from 'tailwind-styled-components'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const PlanFlex = tw.div`
    flex gap-5 
`
const Plan = tw.button`
    flex flex-col border-[1.5px] border-[#e1e1e3] rounded-lg w-[11.5rem] h-[14rem] items-center m-0 justify-center ${(props)=>(props.$isSelected)?'bg-red-500':null || 'm-0'}
`
const PlanImg = tw.img`
    w-14
`
const PlanTxt = tw.h1`
    relative top-7 font-bold font-[Consolas] text-xl text-[#19304a]
`
const PlantTxtFade = tw.h2`
    text-[#c1c1cb] relative top-8 font-[Consolas]
`
const TogglePeriod = tw.div`
    flex bg-[#f8f9fe] mt-5 justify-center items-center py-3 border-2 border-transparent rounded-xl
`
const ToggleButton = tw.button`
    flex ml-3
`
//5 for yearly,9 for monthly
const ButtonFront = tw.span`
    text-transparent w-4 h-4 rounded-full border-[1.5px] border-white bg-white relative right-9 top-[0.125rem]
`
const ButtonBack = tw.span`
    text-transparent w-10 h-5 rounded-lg border-[1.5px] bg-[#032859] border-transparent
`
const TxtChild = tw.h2`
    text-[#2a3a50] font-bold font-[Consolas] text-xl
`
export const GoBack = tw(NextButton)`
    bg-[#f9818e] fixed bottom-12 left-[32rem]
`
export default function Step2() {
    let [active_plan,setPlan] = useState({'Arcade':false,Advanced:false,Pro:false})
    function selectPlan(event) {
        let plan = event.target.childNodes[1].innerHTML
        active_plan = {}
        active_plan[plan] = true
        setPlan(active_plan)
        console.log("ACTIVE:",active_plan)
    }
    return (
        <>
        <StepFlex>
            <Heading>Select your plan</Heading>
            <Instruction>You have the option of monthly or yearly billing</Instruction>
            <PlanFlex>
                <Plan onClick={selectPlan}>
                    <PlanImg src="/assets/images/icon-arcade.svg"></PlanImg>
                    <PlanTxt>Arcade</PlanTxt>
                    <PlantTxtFade>$9/month</PlantTxtFade>
                </Plan>
                <Plan onClick={selectPlan}>
                    <PlanImg src="/assets/images/icon-advanced.svg"></PlanImg>
                    <PlanTxt>Advanced</PlanTxt>
                    <PlantTxtFade>$12/month</PlantTxtFade>
                </Plan>
                <Plan onClick={selectPlan}>
                    <PlanImg src="/assets/images/icon-pro.svg"></PlanImg>
                    <PlanTxt>Pro</PlanTxt>
                    <PlantTxtFade>$15/month</PlantTxtFade>
                </Plan>
            </PlanFlex>
            <TogglePeriod>
                <TxtChild>Monthly</TxtChild>
                <ToggleButton>
                    <ButtonBack>0</ButtonBack>
                    <ButtonFront>1</ButtonFront>
                </ToggleButton>
                <TxtChild>Yearly</TxtChild>
            </TogglePeriod>
        </StepFlex>
        <Link to="/step-3"><NextButton>Next</NextButton></Link>
        <Link to="/step-1"><GoBack>GoBack</GoBack></Link>
        </>
    )
}