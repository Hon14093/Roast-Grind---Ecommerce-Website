import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeMain from './pages/HomeMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-black'>
        
        
          <Header />
        
        

        <main>
          <HomeMain />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
      
    </>
  )
}

export default App
