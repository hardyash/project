import { useState } from 'react'

import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <>
      <Header OpenSidebar={OpenSidebar}/>
        
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Home/>
       
    </>
  )
}

export default App
