import React, { Component, Fragment, useEffect, useState } from 'react';
import '../index.css';
import logo from './person.png'

export default function OwnProfile() {
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

        
        <h1>Hier kommt man auf sein Profil. Profilinformationen werden hier angezeigt</h1>
   
    </div>
   
       
  );
}

