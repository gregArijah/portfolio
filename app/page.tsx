'use client'

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
        {/* small & medium screen layout */}
        <div className='sm:px-24 lg:hidden'>
            < Navbar />
            < Header />
            < About /> 
            < TechStack />
            < Projects />
            
        </div>
        {/* large screen layout */}
        <div className='hidden lg:block'>
             
            <div className='flex px-20 py-10 space-x-2'>
                <section className='w-5/12'>

                    <div className='fixed'>
                      < Header />
                      < Navbar />
                      < Contact />
                    </div> 
                </section>
                <section className='w-7/12 pt-5 float-right'>
                    < About /> 
                    < hr className= 'border-gray-500 border mx-5'/>
                    < TechStack />
                    < hr className= 'border-gray-500 border mx-5'/>
                    < Projects />
                </section>
            </div>
            
        </div>
    </main>
  )
}
