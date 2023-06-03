import Image from 'next/image'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'

export default function Home() {
  return (
    <div className='display'>
      < Navbar /> 
      < Header />
      < About /> 
      < TechStack />
      < Projects />
      </div>
  )
}
