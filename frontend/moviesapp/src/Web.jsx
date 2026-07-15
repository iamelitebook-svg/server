import React from 'react'

function Web({handleSubmit,name,setName,year,setYear,movies }) {
    return (
        <div>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Moviename' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder='year' value={year} onChange={(e) => setYear(e.target.value)} />
                    <button type='submit'>Submit</button>
                </form>

                <h2>Movie List</h2>
                <ul>
                    {movies.map((movie, index) => (
                        <li key={movie._id || movie.id || index}>
                            <strong>{movie.name}</strong>({movie.year})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Web