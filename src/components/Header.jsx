import { Link } from "react-router-dom"



export const Header = () => {
  const links = ["home", "About", "projects", "contacts"]
  return ( 
    <div className=" flex justify-evenly items-center w-screen h-20 bg-black text-white ">
       <div className="flex justify-self-start mr-auto ml-5 text-2xl font-bold ">
        <Link to='/'>Portfolio</Link>
       </div>


      <div className="mr-4 flex justify-between items-center">
        <ul className="flex justify-center mr-2">
           { links.map((link, index) => (
              <li className="mr-3 p-3 capitalize font-bold font-xl" key={index}>
                <Link
              to={link === "home" ? "/" : "#" + link}
              className="flex items-center h-full"
            > {link}
            </Link>
              </li>
              ))}
              </ul>
      </div>
    </div>
    
  )
}
