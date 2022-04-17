import React, { Component, Fragment, useEffect, useState  } from 'react';
import '../index.css';
import logo from './person.png'
import Musicians from './Musicians';
import Feed from './Feed';
import Filter from './Filter';


export default function Discover() {
    const [profession, setProfession] = useState("Gitarrist");
    
  return (
  
   
    <div>
        <div class="header-background-cover"> 
            <div class="header-profile">
                <img src={logo} alt="Logo" width= "200px" height="200px"/> 
                <div>
                    <button class="profession">
                        <span>{profession}</span>
                    <i class="uil uil-music"></i>
                    </button>
                </div>
            </div>          
        </div>

        <div class="container">
            <div class="discover-content">
                <Feed />
                <Musicians />
                <Filter />
            </div>
        </div>
        
       
    </div>
       
  );
}

