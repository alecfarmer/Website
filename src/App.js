import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="profile-card">
        <div className="card-header">
          <div className="pic">
            <img src="" alt=""></img>
          </div>
          <div class="name">James (Alec) Farmer</div>
            <div class="desc">Student & Cybersecurity Enthusiast</div>
            <div class="sm">
              <a href="https://www.linkedin.com/in/ja-farmer/" class="fab fa-linkedin"></a>
              <a href="https://github.com/alecfarmer" class="fab fa-github"></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
