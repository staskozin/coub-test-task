import { Routes, Route } from 'react-router-dom'

import Home from './component/page/Home'
import Stub from './component/page/Stub'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/stub' element={<Stub />} />
      <Route path='*' element={<Home />} />
    </Routes>
  )
}

export default App
