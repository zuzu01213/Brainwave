import { useState } from 'react'

import {Header} from "./Components/Header.jsx";
import ButtonGradient from "./assets/svg/ButtonGradient.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div className={"pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden"}>
              <Header/>
          </div>

      <ButtonGradient />
      </>
  )
}

export default App
