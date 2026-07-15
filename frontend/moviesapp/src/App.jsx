import React, { useEffect, useState } from 'react'
import Web from './Web.jsx'

function App() {
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [movies, setMovies] = useState([])

const movieList=async()=>{
  try{
    const response=await fetch('http://localhost:3000/movies')
    const data=await response.json()
    setMovies(Array.isArray(data)? data:data.data || [])
  }catch(err){
    console.log('error',err)
  }
}
  useEffect(()=>{
    movieList()
  },[])

  const handleSubmit =async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:3000/movies', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({ name, year })
      })
      const result = await response.json()
      if (response.ok) {
        alert('movie added')
        setName('')
        setYear('')
        movieList()
      } else {
        alert(`validation error:${result.errors?.[0]?.msg || 'failed to create'}`)
      }
    } catch (err) {
      alert('server error')
    }
  }

  return (
    <div>
      <Web 
      handleSubmit={handleSubmit}
      name={name}
      setName={setName}
      year={year}
      setYear={setYear}
      movies={movies}
      />
    </div>
  )
}

export default App