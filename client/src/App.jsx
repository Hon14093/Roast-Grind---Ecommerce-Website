import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeMain from './pages/HomeMain'
import FooterTest from './components/FooterTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-black'>

          <Header />

        <main>
          <HomeMain />
        </main>

        <Footer />
        
      </div>
      
    </>
  )
}

export default App
