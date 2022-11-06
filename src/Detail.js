import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { format } from "date-fns";



const Detail = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchDetails = async () => {
    const res = await fetch(
      `https://api.github.com/repos/Omagesandra/${params.reponame}`
    );
    const data = await res.json();
    setDetails(data);
    setLoading(true);
  };
  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line
  }, [params]);

  return (
    <div>
      <section className="Navigation">
        <NavLink to="/" className="navBar">
          Home
        </NavLink>
        <NavLink to="/Repository" className="navBar">
          Repository
        </NavLink>
        <NavLink to="/Error" className="navBar">
          Error
        </NavLink>
      </section>
       <div>
        <div className="details-container">
      <div className="container-wrapper">
        {loading ? (
          <div key={details.id}>
            <div className="profile">
              <div>
              <img src={details.owner.avatar_url} alt={details.owner.login} className="profile-img" />
              </div>
              <div className="name">
                <h2 className="profile-name">{details.owner.login}</h2>
                <p className="profile-name">{details.name}</p>
                <div className="public">
                {details.private ? <p>Private</p> : <p>Public</p> }
                </div>
              </div>
            </div>
            <div className="paragraph">
              <p>
                This repository was created at {""}{" "}
                {format(new Date(details.created_at), "dd MMMM yyyy")} by {""}{" "}
                {details.owner.login}{" "}
              </p>
            <p>
                This repository was updated at {""}{" "}
                {format(new Date(details.updated_at), "dd MMMM yyyy")} by {""}{" "}
                {details.owner.login}{" "}
              </p>
            

            <p>
                This repository was pushed at {""}{" "}
                {format(new Date(details.pushed_at), "dd MMMM yyyy")} by {""}{" "}
                {details.owner.login}{" "}
              </p>
            </div>
            <div>
              <ul>
                    <div>
                      
              <li><a href={details.html_url} target="_blank" rel="noreferrer">
                View Repository
              </a></li>
              
                <li>Star: {details.stargazers_count.toLocaleString()} stars</li>
                </div>
                <div>
                <li>Watchers: {details.watchers_count.toLocaleString()} watchers</li>
                <li>Forks: {details.forks.toLocaleString()} forks</li>
                <li>Default Branch: {details.default_branch} branch</li>
                </div>
              </ul>
            </div>
            
          </div>
        ) : (
          <Loading />
        )}
      </div>
      </div>
      </div>
    </div>
  );
};

export default Detail;
