import React from 'react'
import Home from './Home'
import Repository from './Repository'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Detail from './Detail';
import PageNotFound from './PageNotFound'


function App() {
  return (
     <div>
     <section> 
       
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/Repository" element={<Repository/>}/>
        <Route path="/Repository/:reponame" element={<Detail/>}/>
        <Route path ="*" element={<PageNotFound/>}/>
      </Routes>
     </section>

     
    </div>
  );
}

export default App;
