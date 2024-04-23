import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                  <a className="navbar-brand" href="/"><strong>FreshFlyer</strong></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="/">Home</a>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Dropdown
                              </a>
                              <ul className="dropdown-menu">
                                  <li><Link className="dropdown-item" to="/domestic">Domestic</Link></li>
                                  <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                  <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                  <li><Link className="dropdown-item" to="/politics">Politics</Link></li>
                                  <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                  <li><Link className="dropdown-item" to="/world">World</Link></li>
                                  <li><Link className="dropdown-item" to="/crime">Crime</Link></li>
                                  <li><Link className="dropdown-item" to="/education">Education</Link></li>
                                  <li><Link className="dropdown-item" to="/environment">Environment</Link></li>
                                  <li><Link className="dropdown-item" to="/food">Food</Link></li>
                                  <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                  <li><Link className="dropdown-item" to="/lifestyle">Lifestyle</Link></li>
                                  <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                  <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                                  <li><Link className="dropdown-item" to="/tourism">Tourism</Link></li>
                                  <li><Link className="dropdown-item" to="/other">Other</Link></li>
                                  
                              </ul>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav> 
    </>
  )
}

export default Navbar
