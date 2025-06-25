import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../components/Cards/NoteCard/NoteCard'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='container mx-auto'>
    <NoteCard title="Meeting on 7th July" date="7th July 2025" contents="Meeting on 7th July"/>
    </div>
    
    </>
  )
}

export default Home