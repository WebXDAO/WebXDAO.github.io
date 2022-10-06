import React from 'react'
import Navbar from '../components/Global/Navbar'
import Footer from '../components/Global/Footer'

export default function WebXLayout ({ children }) {
  return (
    <main className="min-h-screen min-w-[400px] w-screen flex flex-col bg-gradient-to-tr from-[#13111C] via-[#14111D] to-[#30122A]">
      <Navbar></Navbar>
      <div className="flex flex-1 md:flex-row">
        <main className="flex-1">{children}</main>
      </div>
      <Footer></Footer>
    </main>
  )
}
