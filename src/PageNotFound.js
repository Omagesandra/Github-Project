import React from 'react'
import {Link} from 'react-router-dom'


const PageNotFound = () => {
  return (
    <section className="error">
      <h2 className="four">404!!!</h2>
      <p className="page">Page not found.</p>
      <p className="page">Check that you are connected to an internet.
      </p>
      <Link className="back" to ="/"> Home</Link>  
  </section>   
  );  
}

export default PageNotFound;