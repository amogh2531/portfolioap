import { useState } from "react";

export const Header = () => {
  const links = ["home", "about", "projects", "skills", "contacts"];
  
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center w-full fixed h-20 shadow-md bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white mb-4 z-20 px-6 lg:px-12">
      
      
      <div className="flex justify-start items-center text-2xl sm:text-lg font-bold italic">
        <a href="#home">Amogh Phadke</a>
      </div>

      
      <div className="lg:hidden">
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="text-white focus:outline-none text-xl"
        >
          &#9776; 
        </button>
      </div>

   
      <div className="hidden lg:flex justify-center items-center">
        <ul className="flex space-x-4">
          {links.map((link, index) => (
            <li className="p-3 capitalize font-bold text-lg" key={index}>
              <a
                href={"#" + link}
                className="flex items-center h-full hover:text-gray-300   transition duration-300"
              >
                {link}
              </a> 
            </li>
          ))}
        </ul>
      </div>

     
      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-gradient-to-r from-violet-500 text-white">
          <ul className="flex flex-col items-center space-y-4 p-4">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={"#" + link}
                  className="capitalize font-bold hover:text-gray-300 transition duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
