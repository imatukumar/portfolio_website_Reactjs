import React from 'react'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Experiences from './components/experience/Experiences'
import Project from './components/project/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
function App() {
  return (
   <main>
    <Hero/>
    <Skills/>
    <Experiences/>
    <Project/>
    <Contact/>
    <Footer/>
   </main>
  )
}

export default App