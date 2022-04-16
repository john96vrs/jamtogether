import React, { Component, Fragment, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import './index.css';
import Header from './Header'
import HeaderNotLogin  from './components/HeaderNotLogin';
import Discover  from './components/Discover';


export default function App() {

  const [isLogin, setLogin] = useState(false);




    if(isLogin === false) {

      return(
        <div class="">   
          <HeaderNotLogin />
          <div class="main container-fluid align-items-center">
            <div className="welcome">
                  <div class='col-md-7'>
                    <div class='Heading'>
                      <h1 class="Heading-text">Treffe Musiker in deiner Nähe</h1>
                    </div>
                    
                  </div>
                  <div class='col-md-5 login'>
                    <div>
                      <h1>Jetzt einloggen</h1>
                      <form onSubmit={() => { setLogin(true); }}> 
                            <input
                              //  onChange={handleChange}
                                type="text"
                                name="username"
                                style = {{ margin: '20px'}}
                              // value={name}
                                placeholder="username"
                            >
                        </input>
                        <br />  
                            <input
                              //  onChange={handlePwChange}
                                type="password"
                                name="password"
                                style = {{ margin: '20px'}}
                              // value={password}
                                placeholder="password"
                            >
                            </input>
                            <br/>
                            <input className="btn btn-dark ms-3" type="submit" value="submit"></input>
                      </form>
                    </div>
                  </div>
              </div>
            </div>
          </div>  
            
      ); 
    }else {
      return (
      
           <Header />
       
       
      )
    }
}

