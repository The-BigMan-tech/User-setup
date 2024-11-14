'use client'
import tw from 'tailwind-styled-components'

const SidebarFlex = tw.div`
    flex flex-col relative right-20 bottom-10
`
const Sidebar = tw.img`
    w-60 relative top-4 left-5 z-0
`
const CheckpointFlex = tw.div`
    flex flex-col z-10 absolute top-14 left-16 gap-10
`
const InnerFlex = tw.div`
    flex gap-5
`
const Checkpoint = tw.div`
    flex items-center justify-center text-white w-10 h-10 rounded-full border-[1.5px] border-white font-bold ${(props)=>(props.$currentStep)?'bg-[#bfe2fa] text-[#1e4267]':null}
`
const Done = tw(Checkpoint)`
    w-16 h-16 relative right-2
`
const SomeText = tw.div`
    flex flex-col
`
const TextChild1 = tw.h2`
    text-[#837eff] text-sm
`
const TextChild2 = tw.p`
    text-white font-bold 
`
export default function LeftComponent(props) {
    const location = props.activePath
    let active_steps = {1:false,2:false,3:false,4:false,5:false}
    
    if (location == '/step-1') {
        active_steps = {}
        active_steps[1] = true
    }
    else if (location == '/step-2') {
        active_steps = {}
        active_steps[2] = true
    }
    else if (location == '/step-3') {
        active_steps = {}
        active_steps[3] = true
    }
    else if (location == '/step-4') {
        active_steps = {}
        active_steps[4] = true
    }
    else if (location == '/thankyou') {
        active_steps = {}
        active_steps[5] = true
    }
    return (
        <>
        <SidebarFlex>
            <Sidebar src="/assets/images/bg-sidebar-desktop.svg" alt="" />
            <CheckpointFlex>
                <InnerFlex>
                    <Checkpoint $currentStep={active_steps[1]}>1</Checkpoint>
                    <SomeText>
                        <TextChild1>STEP 1</TextChild1>
                        <TextChild2>YOUR INFO</TextChild2>
                    </SomeText>
                </InnerFlex>
                <InnerFlex>
                    <Checkpoint $currentStep={active_steps[2]}>2</Checkpoint>
                    <SomeText>
                        <TextChild1>STEP 2</TextChild1>
                        <TextChild2>SELECT PLAN</TextChild2>
                    </SomeText>
                </InnerFlex>
                <InnerFlex>
                    <Checkpoint $currentStep={active_steps[3]}>3</Checkpoint>
                    <SomeText>
                        <TextChild1>STEP 3</TextChild1>
                        <TextChild2>ADDONS</TextChild2>
                    </SomeText>
                </InnerFlex>
                <InnerFlex>
                    <Checkpoint $currentStep={active_steps[4]}>4</Checkpoint>
                    <SomeText>
                        <TextChild1>STEP 4</TextChild1>
                        <TextChild2>SUMMARY</TextChild2>
                    </SomeText>
                </InnerFlex>
                <Done $currentStep={active_steps[5]}>DONE</Done>
            </CheckpointFlex>
        </SidebarFlex>
        </>
    )
}