import React, { useEffect } from 'react'
import { Links } from './Links'
import { useResultContext } from '../contexts/ResultContextProvider'
import { useDebounce } from 'use-debounce'

export const Search = () => {
  const { setSearchParam, searchParam } = useResultContext()
  const [debounceValue] = useDebounce(searchParam, 500);

  useEffect(() => {
    if (debounceValue) {
      setSearchParam(debounceValue);
    }
  }, [debounceValue]);

  return (
    <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3'>
      <input className='sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg'
        value={searchParam}
        type='text' 
        placeholder='Search Goggl'
        onChange={(e) => setSearchParam(e.target.value)}/>
      {searchParam && (
        <button className='absolute top-1.5 right-4 text-2xl text-gray-500'
        onClick={() => setSearchParam("")}>
          X
        </button>
      )}
      <Links />
    </div>
  )
}
