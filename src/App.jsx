import './App.css'
import React from 'react'
import Main from './Components/Main'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,   // animation runs once
      offset: 120,
    });
  }, []);
  return (
    <>
      <Main />
    </>
  )
}

export default App
