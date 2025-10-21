import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Terms from './pages/Terms'
import { DashboardLayout, LoginLayout } from './Layouts'
import PriceListContent from './components/PriceListContent'
import Notfound from './pages/Notfound'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/terms' element={<Terms />} />
        </Route>

        {/* Dashboard Layout */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path='/pricelist' element={<PriceListContent />} />
            <Route path='*' element={<Notfound />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App