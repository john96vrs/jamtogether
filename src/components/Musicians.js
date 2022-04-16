import React, { Component, Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom'


export default function Musicians() {
  const[musicians, setMusicians] = useState([]);
  const[isLoaded, setLoaded] = useState(false);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
    
    /* fetch("http://localhost:4000/v1/movies")
    .then((response) => response.json())
    .then((json) => {
      setMovies(json.movies);
      setLoaded(true);
    }) */

    const musicians = [
        {id:0, name: "Thomas", instrument: "Gitarre", hood: "Bremen"},
        {id:1, name: "Metalhead", hood: "Bremen", band: true ,anzahl: 4},
        {id:2, name: "Andre", instrument: "Trommel", hood: "Bremen", anzahl: ""},
        {id:3, name: "Max", instrument: "Bongo", hood: "Bremen", anzahl: ""},
        {id:4, name: "John", instrument: "E-Gitarre", hood: "Bremen", anzahl: ""},
        {id:5, name: "Yannic", instrument: "Gitarre", hood: "Bremen", anzahl: ""},
        {id:6, name: "Zoe", instrument: "Klavier", hood: "Bremen", anzahl: ""},
        
    ]

    setMusicians(musicians);

    
   });

     
    return (
      
        <div class="musicians row">
            {musicians.map( (m) => (
                <div class="col-md-4 musician" key={m.id}>
                    <Link to={`/profil/${m.id}`}>
                        <div class="musicians-background">
                            {m.name}
                            <p>{m.band ? "Band": "spielt " + m.instrument} </p>
                            <p>aus {m.hood}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
      
    );
  
}

