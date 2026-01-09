import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-primary text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Contaxt</Link>
        <div className="space-x-4">
          <Link href="/login" className="hover:text-gray-200">Login</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header