import React from 'react'
import './Home.css'
import Post from '../Post'

export default function Home() {
  return (
    <div className="home-container-root">
      <div className="home-container">
        <Post />
      </div>
    </div>
  )
}
