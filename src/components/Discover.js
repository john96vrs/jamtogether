import React, { Component, Fragment, useEffect, useState  } from 'react';
import '../index.css';
import logo from './person.png'
import Musicians from './Musicians';


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

        <div class="container-xl">
            <div class="discover-content">
                <div class="feed">Feed</div>
                <Musicians />
                <div class="filter">Filter</div>
            </div>
        </div>
        
       
    </div>
       
  );
}

