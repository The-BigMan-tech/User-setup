'use client'
import tw from 'tailwind-styled-components'
import LeftComponent from '@/components/left-comp'
import RightComponent from '@/components/right-comp'
import { HashRouter } from 'react-router-dom'

const Setup = tw.div`
    flex bg-white w-[60rem] h-[33rem] relative top-9 border-2 border-transparent rounded-xl shadow-xl
`
export default function Main() {
  return (
    <>
      <Setup>
        <HashRouter>
          <RightComponent/>
        </HashRouter>
      </Setup>
    </>
  )
}