import { Home} from "../sections/Home"
import { About } from "../sections/About"
import { Projects } from "../sections/Projects"
import { Skills } from "../sections/Skills"
import { Contact } from "../sections/Contact"
import { Experience } from "../sections/Experience"

export const Homescreen = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col text-white overflow-y-hidden font-jost " >

      
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
                    

          
    </div>
  )

}
