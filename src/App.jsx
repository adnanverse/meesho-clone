import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/commonComponent/Header'
import Slider from './component/commonComponent/Slidersection'
import Slidersection from './component/commonComponent/Slidersection'
import SectionTwo from './component/commonComponent/SectionTwo'
import SignupModal from './component/SignupModal'
import Productlisting from './component/product/Productlisting.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=" tablet:block hidden">
      <Slidersection/>
     {/* <SignupModal/> */}
     <SectionTwo/>
      </div>
      <div className=' tablet:hidden'>
      <Productlisting/>
      </div>
     
    
    </>
  )
}

export default App
