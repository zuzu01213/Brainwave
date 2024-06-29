import { useState } from 'react'

import {Header} from "./Components/Header.jsx";
import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import {Hero} from "./Components/Hero.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div className={"pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"}>
              <Header/>
              <Hero/>



          </div>

      <ButtonGradient />
      </>
  )
}

export default App
