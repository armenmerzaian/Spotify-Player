import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    let navigate = useNavigate();
  return (
    <>
        <div>THIS IS HOME PAGE</div>
        <Link to={'/about'}>About Page</Link>
        <br />
        <br />
        <button onClick={e => navigate("/about")}>About Page Button</button>
    </>
  )
}

export default Home