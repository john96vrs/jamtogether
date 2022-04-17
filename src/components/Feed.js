import React, { Component, Fragment, useEffect, useState } from 'react';
import '../index.css';
import logo from './person.png'

export default function Feed() {
    
  return (
    <div class="feed">
        <h1>Feed</h1>
        <div class="feed-area">
            <div class="feed-single">
                <h2>Bernard</h2>
                <div>
                    <p>Wochenende war krass!</p>
                </div>
            </div>
            <div class="feed-single">
                <h2>Thomas</h2>
                <div>
                    <p>Wer ist dieser Jimmy Hendrix?</p>
                </div>
            </div>
            <div class="feed-single">
                <h2>Tobi</h2>
                <div>
                    <p>Hey Jude!</p>
                </div>
            </div>
        </div>
    </div>    
  );
}

