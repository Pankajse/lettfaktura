import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import PriceList from './pages/PriceList'
import Terms from './pages/Terms'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/pricelist' element={<PriceList/>} />
        <Route path='/terms' element={<Terms/>} />
      </Routes>
    </>
  )
}

export default App
