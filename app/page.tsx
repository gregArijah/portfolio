import Image from 'next/image'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main>
      < Navbar /> 
      <div className=''>
        < Header />
        < About /> 
        < TechStack />
        < Projects />
        < Contact />
      </div> 
    </main>
  )
}
