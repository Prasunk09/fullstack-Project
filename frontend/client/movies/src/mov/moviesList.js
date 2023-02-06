import React,{useState} from 'react';

const MoviesList =()=>{
    const [movies, setMovies] = useState([]);

    const getResult =async()=>{
        const result = await fetch('http://localhost:8080/movies')
        const response = await result.json()
        setMovies(()=>(response))
    }
    getResult()

    return(
        <ul>
            {movies.map(movie=>(
                <li key={movie.name} style={{marginLeft:"20%"}}>
                    <div style={{disply: "flex",flexWrap:"wrap",alignContent:"center"}}>
                       <div style={{border:"2px solid #ccc",padding:"30px",margin:"10px",width:"60%"}}>
                         <h2>{movie.id} . {movie.name} </h2>
                          <div style={{display:"flex",justifyContent: "space-between"}}>
                           <h3>Rating:{movie.Rating}/10 </h3>
                           <h3>Release Date:{movie.release_date}</h3>
                          </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default MoviesList;