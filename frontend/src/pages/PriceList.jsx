import { useState } from 'react'
import Header from '../components/Header'
import SideMenu from '../components/SideMenu'
import PriceListContent from '../components/PriceListContent';

const PriceList = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div style={{display: "flex"}}>
        <SideMenu sidebarOpen={sidebarOpen} />
        <PriceListContent />
      </div>
    </div>
  )
}

export default PriceList