import React from 'react'
import {NavLink} from 'react-router-dom'
import {Helmet} from 'react-helmet'

const Home = () => {
    
    return (
        <div>
          <Helmet>
            <title>Github Repository</title>
            <meta name="description" content="Github API Fetch"></meta>
          </Helmet>
            <section className="Navigation">
                <NavLink to="/" className="navBar">Home</NavLink>
                <NavLink to="/Repository" className="navBar">Repository</NavLink>
                <NavLink to="/Error" className="navBar">Error</NavLink>
            </section>
            <div className="about">
                 <h1 className="header">Hi!! I am Omage Sandra.</h1>
                 <p className="message">I am a Frontend Developer and an HR Personnel. I love to build amazing apps and learn new things.</p>
            </div>
            

        </div>
    )
}





export default Home;