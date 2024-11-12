'use client'
import tw from 'tailwind-styled-components'
import Step1 from './step-1'

const Steps = tw.div`
    relative left-24 top-10
`
export default function RightComponent() {
    return (
        <>
        <Steps>
            <Step1/>
        </Steps>
        </>
    )
}