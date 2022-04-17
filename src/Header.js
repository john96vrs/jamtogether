import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, Redirect} from 'react-router-dom';
import './index.css';
import Discover  from './components/Discover';
import Chats  from './components/Chats';
import Profile  from './components/Profile';
import OwnProfile  from './components/OwnProfile';
import Match  from './components/Match';




export default function Header() {


  return (
  <Router>
    <div class="page-wrap">
          
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container">
            <Link class="logo" to="/">JamTogether <i class="uil uil-music-note"></i></Link>      
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                <Link to="/">Entdecken</Link>
                </li>
                <li class="nav-item">
                <Link to="/match">Match</Link>
                </li>
                <li class="nav-item">
                <Link to="/profil">Profil</Link>
                </li>
            </ul>
            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                <Link to="/chats">Chats</Link>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#" onClick={() =>  window.location.href = "http://localhost:3000/"}>Logout</a>
                </li>  
            </ul>
            </div>
        </div>
        </nav>

        <div>
            
            <Switch>                         
                <Route exact path="/" component={Discover}/>
                  
                <Route path="/profil/:id" component={Profile} />   
                <Route path="/profil">
                    <OwnProfile />
                </Route>
                <Route path="/Match">
                    <Match />
                </Route>           
                <Route path="/chats">
                    <Chats />
                </Route>
            </Switch>
        </div>
    </div>
    </Router>
       
  );
}

