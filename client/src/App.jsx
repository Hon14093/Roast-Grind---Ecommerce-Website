import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeMain from './components/HomeMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-black'>
        <header>
          <Header />
        </header>

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
