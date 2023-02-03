import { useState } from 'react'
import { Dashboard } from './pages/Dashboard'
import { LandingPG } from './pages/LandingPG'


function App() {

  const [currentPage, setCurrentPage] = useState("")
  return (
    <div>
      {currentPage === "" && <LandingPG setCurrentPage={setCurrentPage}/>}
      {currentPage === "dashboard" && <Dashboard setCurrentPage={setCurrentPage}/>}
    </div>
  )
}

export default App
