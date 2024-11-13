'use client'
import tw from 'tailwind-styled-components'
import { StepFlex,Heading,Instruction,NextButton } from './step-1'
import { GoBack } from './step-2'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

const Addons = tw.div`
    flex flex-col mt-2 gap-5
`
const Addon = tw.div`
    flex border-[1.5px] border-[#bcbdc5] rounded-lg py-3 relative w-[35rem]
`
const AddonChild1 = tw.div`
    flex flex-col
`
const AddonChild2 = tw.span`
    absolute top-6 right-0 mr-4 text-[#887ce9] font-bold font-[Verdana]
`
const AddonHead = tw.h2`
    text-[#283958] font-bold font-[Consolas] text-lg
`
const AddonText = tw.p`
    text-[#bcbdc5] font-[Consolas]
`
const Checkmark = tw.button`
    mr-6 ml-3 border border-[#bcbdc5] h-6 w-6 rounded-sm relative top-3 text-transparent ${(props)=>(props.$isChecked == true)?'bg-[#463dfa]':'bg-transparent'}
`
export default function Step3() {
    const NextButton3 = tw(NextButton)`
        bg-[#02295a]
    `
    let [checked,setChecked] = useState({1:false,2:false,3:false})

    function checkIt(event) {
        let num = event.target.textContent;
        (checked[num] == false)?setChecked((old)=>({...old,[num]:true})):setChecked((old)=>({...old,[num]:false}))
    }

    return(
        <>
        <StepFlex>
            <Heading>Pick addons</Heading>
            <Instruction>Addons help enhance your gaming experience.It is optional but recommended</Instruction>
            <Addons>
                <Addon>
                    <Checkmark onClick={checkIt} $isChecked={checked[1]}>1</Checkmark>
                    <AddonChild1>
                        <AddonHead>Online Service</AddonHead>
                        <AddonText>Access to multiplayer games</AddonText>
                    </AddonChild1>
                    <AddonChild2>+$10/yr</AddonChild2>
                </Addon>
                <Addon>
                    <Checkmark onClick={checkIt} $isChecked={checked[2]}>2</Checkmark>
                    <AddonChild1>
                        <AddonHead>Larger Storage</AddonHead>
                        <AddonText>Extra 1TB of space</AddonText>
                    </AddonChild1>
                    <AddonChild2>+$20/yr</AddonChild2>
                </Addon>
                <Addon>
                    <Checkmark onClick={checkIt} $isChecked={checked[3]}>3</Checkmark>
                    <AddonChild1>
                        <AddonHead>Customizable profile</AddonHead>
                        <AddonText>Custom theme on your own profile</AddonText>
                    </AddonChild1>
                    <AddonChild2>+$25/yr</AddonChild2>
                </Addon>
            </Addons>
        </StepFlex>
        <Link to="/step-4"><NextButton3>Next</NextButton3></Link>
        <Link to="/step-2"><GoBack>GoBack</GoBack></Link>
        </>
    )
}