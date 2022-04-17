import React, { Component, Fragment, useEffect, useState } from 'react';
import '../index.css';
import logo from './person.png'

export default function Feed() {
    
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
                    Anfänger
                </label>
            </div>
           
        </div>
    </div>    
  );
}

