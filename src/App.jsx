import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Privacypolicy from './assets/Components/privacypolicy'
import Tdl from './assets/Components/tdl'
import TandC from './assets/Components/TandC'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path='/tdl' element={<Tdl />} />
          <Route path='/tandc' element={<TandC/>} />
      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App