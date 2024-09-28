import {  Routes, Route } from 'react-router-dom'

import './App.css'
import {Header} from "./components/Header"
import { Homescreen } from './screens/Homescreen'

function App() {
  

  return (
    <>
      <Header/>
      
          <Routes>
            <Route path='/' element={<Homescreen/>}></Route>
          </Routes>
      
       
    </>
  )
}

export default App
