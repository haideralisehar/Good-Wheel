import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Banner from "./components/Banner"
import SpecialDeals from "./components/SpecialDeals"
import Destinations from "./components/Destinations"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <SpecialDeals/>
      <Destinations/>
      <Footer/>
    </>
  )
}

export default App


