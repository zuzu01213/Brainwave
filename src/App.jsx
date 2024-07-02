import { useState } from 'react'
import {Header} from "./Components/Header/Header.jsx";
import ButtonGradient from "./assets/svg/ButtonGradient.jsx";
import {Hero} from "./Components/Header/Hero.jsx";
import {Benefits} from "./Components/Body/Benefits.jsx";
import {Collaboration} from "./Components/Body/Collaboration.jsx";
import {Services} from "./Components/Service/Services.jsx";
import {Pricing} from "./Components/Pricing/Pricing.jsx";
import {Roadmap} from "./Components/Footer/Roadmap.jsx";


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
              <Pricing/>
              <Roadmap/>

          </div>

      <ButtonGradient />
      </>
  )
}

export default App
