import { useState } from 'react'


import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
   <Header/>
   
  <Footer/>
    </Router>
  )
}

export default App
