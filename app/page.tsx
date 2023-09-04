'use client'

import Image from 'next/image'

import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ContactForm from './components/ContactForm'

export default function Home() {
  

  return (
    <main className='bg-slate-800 text-slate-200'>
        {/* small & medium screen layout */}
        <div className='sm:px-24 lg:hidden'>
            < Navbar />
            < Header /> {/* contact is included in header for small & medium screen layout */}
            < About /> 
            < TechStack />
            < Projects />
            < ContactForm />
            
        </div>
        {/* large screen layout */}
        <div className='hidden lg:block'>
             
            <div className='flex px-20 py-10 space-x-2'>
                <section className='w-5/12'>

                    <div className='fixed flex flex-col h-full justify-between'>
                      < Header />
                      < Contact />
                      < ContactForm />
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
