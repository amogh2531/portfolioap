import { Home} from "../sections/Home"
import { About } from "../sections/About"
import { Projects } from "../sections/Projects"
import { Skills } from "../sections/Skills"
import { Contact } from "../sections/Contact"

export const Homescreen = () => {
  return (
    <div className="bg-black flex flex-col text-white overflow-y-hidden " >

      {/* home section */}
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
                    

          
    </div>
  )

}
