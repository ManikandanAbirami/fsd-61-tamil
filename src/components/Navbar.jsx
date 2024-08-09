import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
                <NavLink className='navbar-brand' to='/'>React Router</NavLink>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/posts-comments'>Posts & Comments</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/albums-photos'>Albums & Photos</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/todos-users'>Todos & Users</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar