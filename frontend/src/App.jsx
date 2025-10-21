import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import PriceList from './pages/PriceList'
import Terms from './pages/Terms'
import { DashboardLayout, LoginLayout } from './Layouts'

function App() {

  return (
    <>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/terms' element={<Terms />} />
        </Route>

        {/* Dashboard Layout */}
        <Route element={<DashboardLayout />}>
          <Route path='/pricelist' element={<PriceList />} />
        </Route>

      </Routes>
    </>
  )
}

export default App