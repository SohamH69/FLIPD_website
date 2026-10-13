import React from 'react'

function Footer() {
  return (
     <footer className="flex flex-col gap-4 border-t border-white/10 px-5 py-6 text-[10px] uppercase tracking-[0.15em] text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <a href="/" className="font-black tracking-tight text-white">
          FLIPD.
        </a>
        <p>Independent by nature. Creative by design.</p>
        <p>© {new Date().getFullYear()} FLIPD.</p>
      </footer>
  )
}

export default Footer