'use client'
import tw from 'tailwind-styled-components'
import Step1 from './step-1'
import Step2 from './step-2'

const Steps = tw.div`
    relative left-24 top-10
`
export default function RightComponent() {
    let current_step = <Step2/>
    return (
        <>
        <Steps>
            {current_step}
        </Steps>
        </>
    )
}