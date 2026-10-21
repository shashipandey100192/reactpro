import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </a>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="user">Users</Link></li>
                                    <li><Link class="dropdown-item" to="admin">Admin</Link></li>
                                    
                                </ul>
                            </li>
                           
                        </ul>
                        
                    </div>
                </div>
            </nav>

        </Fragment>
    )
}

export default Welcome