import { StepFlex,Heading,Instruction,NextButton} from './step-1'
import tw from 'tailwind-styled-components'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const PlanFlex = tw.div`
    flex gap-5 
`
const Plan = tw.button`
    flex flex-col border-[1.5px] border-[#e1e1e3] rounded-lg w-[11.5rem] h-[14rem] items-center m-0 justify-center ${(props)=>(props.$isSelected)?'bg-[#f8f9fe] border-[#483eff]':null || 'm-0'} hover:bg-[#f8f9fe] hover:border-[#483eff]
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
const ButtonFront = tw.span`
    text-transparent w-4 h-4 rounded-full border-[1.5px] border-white bg-white relative top-[0.125rem] ${(props)=>((props.$period.monthly == true))?'right-8':'right-4'}
`
const ButtonBack = tw.span`
    text-transparent w-8 h-5 rounded-lg border-full bg-[#032859] border-transparent
`
const TxtChild = tw.h2`
    text-[#2a3a50] font-bold font-[Consolas] text-xl ${(props)=>(props.$period == false)?'text-[#939397]':null}
`
export const GoBack = tw(NextButton)`
    bg-[#f9818e] fixed bottom-12 left-[32rem]
`

export default function Step2() {
    const NextButton2 = tw(NextButton)`
        ${(props)=>(props.$proceed == true)?'bg-[#02295a]':null}
    `
    let [proceed,setProceed] = useState(false)
    let [period,setPeriod] = useState({monthly:true,yearly:false})
    let [subscription,setSubscription] = useState({1:'$9/month',2:'$12/month',3:'$15/month'})

    function queryProp(prop) {
        let is_true = (passed_query[prop])?passed_query[prop]:false
        proceed = (is_true)?true:false
        return is_true
    }
    let [active_plan,setPlan] = useState({Arcade:queryProp('Arcade'),Advanced:queryProp('Advanced'),Pro:queryProp('Pro')})
    delete passed_query.Arcade,delete passed_query.Advanced,delete passed_query.Pro
    const second_data = queryString.stringify({...active_plan,...period,...passed_query})

    function selectPlan(event) {
        let plan = null
        let nodename = event.target.nodeName
        plan = (nodename != "BUTTON")?event.target.parentNode.childNodes[1].textContent:event.target.childNodes[1].textContent
        active_plan = {[plan]:true,}
        setPlan(active_plan)
        setProceed(true)
    }
    function togglePeriod() {
        if (period.monthly == true) {
            setPeriod({monthly:false,yearly:true})
            setSubscription({1:'$90/yr',2:'$120/yr',3:'$150/yr'})
        }
        else {
            setPeriod({monthly:true,yearly:false})
            setSubscription({1:'$9/month',2:'$12/month',3:'$15/month'})
        }
        console.log('AFTER',period)
    }
    let next = <NextButton2 $proceed={proceed}>Next</NextButton2>
    if (active_plan.Arcade || active_plan.Advanced || active_plan.Pro == true) {
        next = <Link to={`/step-3?${second_data}`}>{next}</Link>
    }
    return (
        <>
        <StepFlex>
            <Heading>Select your plan</Heading>
            <Instruction>You have the option of monthly or yearly billing</Instruction>
            <PlanFlex>
                <Plan onClick={selectPlan} $isSelected={active_plan['Arcade']}>
                    <PlanImg src="/assets/images/icon-arcade.svg"></PlanImg>
                    <PlanTxt>Arcade</PlanTxt>
                    <PlantTxtFade>{subscription[1]}</PlantTxtFade>
                </Plan>
                <Plan onClick={selectPlan} $isSelected={active_plan['Advanced']}>
                    <PlanImg src="/assets/images/icon-advanced.svg"></PlanImg>
                    <PlanTxt>Advanced</PlanTxt>
                    <PlantTxtFade>{subscription[2]}</PlantTxtFade>
                </Plan>
                <Plan onClick={selectPlan} $isSelected={active_plan['Pro']}>
                    <PlanImg src="/assets/images/icon-pro.svg"></PlanImg>
                    <PlanTxt>Pro</PlanTxt>
                    <PlantTxtFade>{subscription[3]}</PlantTxtFade>
                </Plan>
            </PlanFlex>
            <TogglePeriod>
                <TxtChild $period={period['monthly']}>Monthly</TxtChild>
                <ToggleButton onClick={togglePeriod} >
                    <ButtonBack>0</ButtonBack>
                    <ButtonFront $period={period}>1</ButtonFront>
                </ToggleButton>
                <TxtChild $period={period['yearly']}>Yearly</TxtChild>
            </TogglePeriod>
        </StepFlex>
        {next}
        <Link to="/step-1"><GoBack>GoBack</GoBack></Link>
        </>
    )
}