import React, { useEffect, useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [movies, setMovies] = useState([])

const movieList=async()=>{
  try{
    const response=await fetch('http://localhost:3000/users')
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
      const response = await fetch('http://localhost:3000/users', {
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
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Moviename' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='year' value={year} onChange={(e) => setYear(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>

      <h2>Movie List</h2>
      <ul>
        {movies.map((movie,index)=>(
          <li key={movie._id || movie.id || index}>
            <strong>{movie.name}</strong>({movie.year})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App