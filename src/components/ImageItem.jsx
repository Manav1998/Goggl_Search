import React from 'react'

export const ImageItem = ({ url, title, image }) => {
    return (
        <div className='w-half'>
            <a href={url} rel='noreferrer' target='_blank' className='sm:p-3 p-5'>
                <img src={image ?? ""} alt={title} loading='lazy' height={200} width={200}/>
                <p className='w-36 break-words text-sm mt-2'>
                    {title}
                </p>
            </a>
        </div>
    )
}
