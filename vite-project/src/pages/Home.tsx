import { useState } from 'react'
import '../style/Navbar.css'
import Header from './Header'
import Sidenav from './Sidenav'
import AdminDashboard from './AdminDash'


function Home() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidenav openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <AdminDashboard />
    </div>
  )
}

export default Home