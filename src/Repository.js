import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Loading from './Loading'
import ReactPaginate from 'react-paginate'


const Repository = () => {
    const [repos, setRepos] = useState([]);
     const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    const reposPerPage = 4;
    const pagesVisited = pageNumber * reposPerPage;


        const fetchRepos = async () => {
            const res = await fetch('https://api.github.com/users/Omagesandra/repos')
            const data = await res.json()
            setRepos(data);
            setLoading(true);
        };
        useEffect (() => {
            fetchRepos();
        }, []);

        const pageCount = Math.ceil(repos.length / reposPerPage);
        function changePage({selected}) {
            setPageNumber(selected);
        }



    return (
        <div>
            <section className="Navigation">
                <NavLink to="/" className="navBar">Home</NavLink>
                <NavLink to="/Repository" className="navBar">Repository</NavLink>
                <NavLink to="/Error" className="navBar">Error</NavLink>
            </section>
            <div className="container">
                <div>
                {loading ? repos.slice(pagesVisited, pagesVisited + reposPerPage )
                .map((repo)=>{
                    return (
                        <div className="Links">
                        <Link to = {`/Repository/${repo.name}`}>
                            <div className="linkDetails">
                                <div>
                        <img src={repo.owner.avatar_url} alt={repo.owner.login} className="repo-img"/>
                        </div>
                        <div>
                        <h1>{repo.owner.login}</h1>
                        </div>
                        </div>
                        <h2 key={repo.id}>{repo.name}</h2>
                        
                        </Link>
                        </div>
                    );
                })
                :<Loading/>
            }
            </div>
            <div>
                <ReactPaginate 
                previousLabel= {"Prev"}
                nextLabel= {"Next"}
                pageCount= {pageCount}
                onPageChange= {changePage}
                containerClassName={"PaginationBtn"}
                previousLinkClassName={"prevBtn"}
                nextLinkClassName={"nextBtn"}
                disabledClassName={"disabled"}
                activeClassName= {"active"}
                />
            </div>
            </div>
           
        </div>
    )
}





export default Repository;