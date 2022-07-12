import React from 'react'
import { TopNewCard } from '../components/TopNewCard'
import { notices } from '../utils/data'

export const Home = () => {
  return (
    <div className="flex flex-1">
      <TopNewCard notice={notices[0]}/>
    </div>
  )
}
