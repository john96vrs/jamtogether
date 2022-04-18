import React, { Component, Fragment, useEffect, useState } from 'react';
import '../index.css';
import logo from './person.png'
import {Slider} from '@mui/material';
import Box from '@mui/material/Box';


export default function Feed() {

    const [value, setValue] = useState([20, 37]);

    function handleChange(event) {
        setValue(event.target.value);
    }

    var valuetext = "test";

  return (
    <div class="filter">
        <h1>Filter</h1>
        <div class="feed-area">
            <div>
                <label>
                    <input type="checkbox" />
                    Band
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" />
                    Musiker
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" />
                    Coaches
                </label>
            </div>
           <div>         
            <select name="pets" id="pet-select">
                <option value="">Instrument</option>
                <option value="dog">E-Gitarre</option>
                <option value="cat">Piano</option>
                <option value="hamster">Schlagzeug</option>
                <option value="parrot">Singen</option>
                <option value="spider">Trompete</option>
                <option value="goldfish">Akustik-Gitarre</option>
                <option value="goldfish">Bass-Gitarre</option>

            </select>
           </div>
           <div>
               <h5>Aus</h5>
               <input type="text" placeholder="Stadt" class="input-city"/>
           </div>
           <div>
               <h5>Entfernung</h5>
              
                <Box sx={{ width: 300 }}>
                    <Slider
                        getAriaLabel={() => 'Distance range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"                        
                    />
                </Box>
                <div class="distance-label">
                   <p>0</p>
                   <p>100</p>
               </div>

           </div>
        </div>
    </div>    
  );
}

