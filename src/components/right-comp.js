'use client'
import tw from 'tailwind-styled-components'
import Step1 from './step-1'
import Step2 from './step-2'
import Step3 from './step-3'
import Step4 from './step-4'
import {Routes,Route,useLocation} from 'react-router-dom'
import LeftComponent from './left-comp'

const Steps = tw.div`
    flex relative left-24 top-10
`
export default function RightComponent() {
    const location = useLocation()
    return (
        <>
        <Steps>
            <LeftComponent activePath={location.pathname}/>
            <Routes>
                <Route path="/" element={<Step1 />} />
                <Route path="/step-1" element={<Step1/>}/>
                <Route path="/step-2" element={<Step2/>}/>
                <Route path="/step-3" element={<Step3/>}/>
                <Route path="/step-4" element={<Step4/>}/>
            </Routes>
        </Steps>
        </>
    )
}