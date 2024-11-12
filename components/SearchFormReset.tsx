"use client"
import { Button } from './ui/button'
import Link from 'next/link'

const SearchFormReset = () => {
  const clearQuery = () => {
    const form = document.querySelector('#search-form') as HTMLFormElement
    if (form) form.reset()
  }

  return (
    <Button
      type='reset'
      className='bg-white text-black text-xl md:text-2xl uppercase font-bold hover:bg-yellow-400 transition-all tracking-wide'
      onClick={clearQuery}>
      <Link href={'/'}>Reset</Link>
    </Button>
  )
}

export default SearchFormReset
