import { useState } from 'react'

import {Header} from "./Components/Header.jsx";
import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import {Hero} from "./Components/Hero.jsx";
import {Benefits} from "./Components/Benefits.jsx";
import {Collaboration} from "./Components/Collaboration.jsx";
import {Services} from "./Components/Services.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div className={"pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"}>
              <Header/>
              <Hero/>
              <Benefits/>
              <Collaboration/>
              <Services/>


              <div className={"mt-96"}/>
          </div>

      <ButtonGradient />
      </>
  )
}

export default App
