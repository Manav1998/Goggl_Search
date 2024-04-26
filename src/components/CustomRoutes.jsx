import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {Results} from './Results'

export const CustomRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={
        <Navigate to='/search'/>
      }/>
      <Route exact path='/videos' element={
          <Results/>
      }/>
      <Route exact path='/images' element={
          <Results/>
      }/>
      <Route exact path='/news' element={
          <Results/>
      }/>
      <Route exact path='/search' element={
          <Results/>
      }/>
    </Routes>
  )
}
