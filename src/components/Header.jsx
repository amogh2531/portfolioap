import { Link } from "react-router-dom"


export const Header = () => {
  const links = ["home", "about", "projects","skills", "contacts"]
  return ( 
    <div className=" flex justify-between items-center w-[100vw] fixed h-20 bg-black text-white mb-4 z-20 ">

       <div className="flex justify-self-start  ml-5 text-2xl font-bold ">
        <Link to='/'>Amogh Phadke</Link>
       </div>


      <div className=" flex justify-between items-center">
        <ul className="flex justify-center mr-2">
           { links.map((link, index) => (
              <li className="mr-3 p-3 capitalize font-bold font-xl" key={index}>
                <a
               href={ "#" + link}
               className="flex items-center h-full scroll-smooth"
            > {link}
            </a>
              </li>
              ))}
              </ul>
      </div>
    </div>
    
  )
}
