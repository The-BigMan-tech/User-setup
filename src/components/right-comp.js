'use client'
import tw from 'tailwind-styled-components'
import Step1 from './step-1'
import Step2 from './step-2'
import Step3 from './step-3'
import Step4 from './step-4'

const Steps = tw.div`
    relative left-24 top-10
`
export default function RightComponent() {
    let current_step = <Step4/>
    return (
        <>
        <Steps>
            {current_step}
        </Steps>
        </>
    )
}