import React from 'react';
import logo from './logo.svg';
import './App.css';
import FeaturedPost from './components/FeaturedPost';
import MainPost from './components/MainPost';


function App() {
  return (
    <div class="container">
      <div style={{padding: "10px"}}>
        <MainPost />
      </div>
      <div class="row">
        <div style={{padding: "10px"}} class="col-7">
          <FeaturedPost />
        </div>
        <div style={{padding: "10px"}} class="col-5">
          <FeaturedPost />
        </div>
      </div>

    </div>
  );
}

export default App;
