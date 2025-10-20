import { useState } from 'react'
import Header from '../components/Header'
import SideMenu from '../components/SideMenu'

const PriceList = () => {
  const [sidebarOpen, setsidebarOpen] = useState(true);
  return (
    <div>
      <Header setsidebarOpen={setsidebarOpen} />
      <SideMenu sidebarOpen={sidebarOpen}  />
    </div>
  )
}

export default PriceList