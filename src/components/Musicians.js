import React, { Component, Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import profilePic from './profiles.jpg'


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
        {id:0, name: "Thomas", instrument: "Gitarre", hood: "Bremen",desc: "Ich will ne Band"},
        {id:1, name: "Metalhead", hood: "Bremen", band: true ,anzahl: 4,desc: "Wir sind eine Anfänger Band und wollen mehr Mitglieder haben"},
        {id:2, name: "Andre", instrument: "Trommel", hood: "Bremen", anzahl: "",desc: "Ich suche ein Jam Partner"},
        {id:3, name: "Max", instrument: "Bongo", hood: "Bremen", anzahl: ""},
        {id:4, name: "John", instrument: "E-Gitarre", hood: "Bremen", anzahl: "",desc: "Suche Jamsessions in der Nähe"},
        {id:5, name: "Yannic", instrument: "Gitarre", hood: "Bremen", anzahl: "",desc: "Ich will ne Band"},
        {id:6, name: "Zoe", instrument: "Klavier", hood: "Bremen", anzahl: "",desc: "Ich will ne Band"},
        
    ]

    setMusicians(musicians);

    
   });

     
    return (
      
        <div class="musicians row">
            {musicians.map( (m) => (
                <div class="col-md-6 col-lg-4 musician" key={m.id}>    
                    <div class="card"> 
                        <Link to={`/profil/${m.id}`}>
                            <img src={profilePic} class="card-img-top" alt="..."></img>   
                        </Link>                   
                        <div class="card-body">
                            <h5 class="card-title">{m.name}</h5>
                            <h6>{m.band ? "Band": "spielt " + m.instrument}</h6>
                            <p class="card-text">{m.desc}</p>
                            <div class="socials">
                                <button><i class="uil uil-music"></i></button>
                                <button><i class="uil uil-comments"></i></button>
                            </div>
                        </div>               
                    </div>
                    
                </div>
            ))}
        </div>
      
    );
  
}

