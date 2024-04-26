import React, { useEffect } from 'react'
import { useResultContext } from '../contexts/ResultContextProvider'
import { useLocation } from 'react-router-dom';
import { Loading } from './Loading';
import { SearchItem } from './SearchItem';
import { ImageItem } from './ImageItem';
import ReactPlayer from 'react-player';

const getUriString = (loc) => {
  switch (loc) {
    case '/search':
      return '/websearch';
    case '/images':
      return '/imagesearch';
    case '/videos':
      return '/videosearch';
    case '/news':
      return ''
    default:
      break;
  }
}

export const Results = () => {
  const { results, isLoading, getResults, errorMsg, searchParam } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults(getUriString(location.pathname))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, searchParam])

  if (isLoading) {
    return (
      <Loading />
    )
  }

  if (errorMsg) {
    return (
      <div className='flex flex-wrap justify-around items-center pt-12'>
        <p className='text-md dark:text-gray-300 text-gray-700 text-bold text-center'>
          {errorMsg}
        </p>
      </div>
    )
  }

  console.log(location.pathname);
  switch (location.pathname) {
    case '/search':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {results?.result?.map(({ body, title, href }, index) => (
            <SearchItem key={index} body={body} title={title} href={href} />
          ))}
        </div>
      )
    case '/videos':
      return (<div className='flex flex-wrap'>
        {results?.result?.map(({ content, description }, index) => (
          <div key={index} className='flex flex-wrap justify-between p-2'>
            {content && <ReactPlayer url={content} controls height={255} width={255} />}
            <p className='w-50 break-words text-sm mt-2'>
              {description}
            </p>
          </div>
        ))}
      </div>)
    case '/images':
      return (<div className='flex flex-wrap justify-between sm:px-56'>
        {results?.result?.map(({ image, title, url }, index) => (
          <ImageItem key={index} image={image} title={title} url={url} />
        ))}
      </div>)
    case '/news':
      return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
          {results?.news?.map(({ body, title, url, image }, index) => (
            <SearchItem key={index} body={body} title={title} href={url} image={image} />
          ))}
        </div>
      )
    default:
      break;
  }
}
