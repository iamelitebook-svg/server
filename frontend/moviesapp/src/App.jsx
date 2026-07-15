
import React, { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [year, setYear] = useState('')

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
    </div>
  )
}

export default App