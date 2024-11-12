'use client'
import tw from 'tailwind-styled-components'

const SidebarFlex = tw.div`
    flex flex-col
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
    flex items-center justify-center text-white w-10 h-10 rounded-full border-[1.5px] border-white font-bold
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
export default function LeftComponent() {
    return (
        <>
        <SidebarFlex>
            <Sidebar src="/assets/images/bg-sidebar-desktop.svg" alt="" />
            <CheckpointFlex>
                <InnerFlex>
                    <Checkpoint>1</Checkpoint>
                    <SomeText>
                        <TextChild1>STEP 1</TextChild1>
                        <TextChild2>YOUR INFO</TextChild2>
                    </SomeText>
                </InnerFlex>
                <InnerFlex>
                    <Checkpoint>2</Checkpoint>
                    <SomeText>
                        <TextChild1>STEP 2</TextChild1>
                        <TextChild2>SELECT PLAN</TextChild2>
                    </SomeText>
                </InnerFlex>
                <InnerFlex>
                    <Checkpoint>3</Checkpoint>
                    <SomeText>
                        <TextChild1>STEP 3</TextChild1>
                        <TextChild2>ADDONS</TextChild2>
                    </SomeText>
                </InnerFlex>
                <InnerFlex>
                    <Checkpoint>4</Checkpoint>
                    <SomeText>
                        <TextChild1>STEP 4</TextChild1>
                        <TextChild2>SUMMARY</TextChild2>
                    </SomeText>
                </InnerFlex>
            </CheckpointFlex>
        </SidebarFlex>
        </>
    )
}