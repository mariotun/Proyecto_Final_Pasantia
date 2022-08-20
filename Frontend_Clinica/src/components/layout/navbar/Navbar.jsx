import {Link} from 'react-router-dom';

export function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white h5" aria-label="Eighth navbar example">
        <div className="container">
          <Link className="navbar-brand" to="/">ADMIN</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse " id="navbarsExample07">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link" to="/client">Client</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">User</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/professional">Professional</Link>
              </li>
            
            </ul>
            <form role="search">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
            </form>
          </div>
        </div>
      </nav>
    )
    
}

/*
<nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
    <div className="container">
      <a className="navbar-brand" href="#">ADMIN</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample07">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Disabled</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form role="search">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        </form>
      </div>
    </div>
  </nav>
*/