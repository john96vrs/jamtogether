import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch} from 'react-router-dom';


export default function Profile(props) {

    const[musician, setMusician] = useState([]);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        const musicians = [
            {id:0, name: "Thomas", instrument: "Gitarre", hood: "Bremen"},
            {id:1, name: "Metalhead", hood: "Bremen", band: true ,anzahl: 4},
            {id:2, name: "Andre", instrument: "Trommel", hood: "Bremen", anzahl: ""},
            {id:3, name: "Max", intrument: "Bongo", hood: "Bremen", anzahl: ""},
            {id:4, name: "John", instrument: "E-Gitarre", hood: "Bremen", anzahl: ""},
            {id:5, name: "Yannic", instrument: "Gitarre", hood: "Bremen", anzahl: ""},
            {id:6, name: "Zoe", instrument: "Klavier", hood: "Bremen", anzahl: ""},
            
        ]
    
    const musician = {
        id: props.match.params.id,
        name: musicians[props.match.params.id].name,
        instrument: musicians[props.match.params.id].instrument,
        band: musicians[props.match.params.id].band,
        hood: musicians[props.match.params.id].hood,
        anzahl: musicians[props.match.params.id].anzahl,
    }

    setMusician(musician);
   });
  
    return (
        <div class="profile">
            <div class="profile-content">
                <h2>Name: {musician.name} </h2>
                <div>
                    <h3>
                    { musician.instrument ? "spielt " + musician.instrument : "ist eine Band aus " + musician.hood} 
                    </h3>
                    <p>  {musician.band ? "Anzahl: " + musician.anzahl  : <></>} </p>

                </div>
                <button class="btn btn-primary">mit {musician.name} chatten +</button>
            </div>           
        </div>
    );
    
}
