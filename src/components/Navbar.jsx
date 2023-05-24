import React from 'react'


const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><img src="https://assets.airtel.in/static-assets/common/img/airtel.webp" width="100px" alt="" /></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="ri-menu-2-line"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Feature</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Pricing</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">Why choose us</a>
                  </li>


                </ul>
              </div>
            </div>
          </nav>

        </div>
      </div>
    </>
  )
}

export default Navbar