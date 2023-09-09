'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import MoonIcon from '@/icons/MoonIcon'
import SunIcon from '@/icons/SunIcon'

const ThemeButton = ({className = ''}) => {
  const { resolvedTheme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`${className}`}>
    <button
      aria-label='Toggle Dark Mode'
      className='flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className=' text-orange-300' />
      ) : (
        <MoonIcon className=' text-slate-800' />
      )}
    </button>
    </div>
  )
}

export default ThemeButton