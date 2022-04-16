import React, { Component, Fragment } from 'react';
import '../index.css';


export default function HeaderNotLogin() {

    
  return (
  
   
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-xl">
        <a class="navbar-brand" href="/">JamTogether</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mb-4 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Musik</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Über uns</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Support</a>
            </li>
          </ul>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Sprache</a>
            </li> 
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Registrieren</a>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
       
  );
}

