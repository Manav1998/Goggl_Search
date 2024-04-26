import React from 'react'

export const SearchItem = ({ body, title, href, image }) => {
  return (
    <div className='w-full md:w-2/5'>
      <a href={href} target='_blank' rel='noreferrer'>
        {image && <img src={image} alt={title} loading='lazy' height={200} width={200} />}
        <p className='text-sm'>
          {title.length > 30 ? title.substring(30) : title}
        </p>
        <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
          {body}
        </p>
      </a>
    </div>
  )
}
