import React from 'react'

const Footer = () => {
  return (
    <>
    <div id="footer">
      <div className="container f_sociallinks">
        <a href=""><i className="ri-facebook-line"></i></a>
        <a href=""><i className="ri-twitter-line"></i></a>
        <a href=""><i className="ri-instagram-line"></i></a>
        <a href=""><i className="ri-linkedin-line"></i></a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <img src="https://assets.airtel.in/static-assets/new-home/img/airtel-red.svg" alt="" className="img-fluid" width="150px" />
          </div>
          <div className="col-lg-7 col-md-7 ms-auto">
            <div className="row">
              <div className="col-6">
                <ul>
                  <li><a href="">IMPORTANT ALERTS</a></li>
                  <li><a href="">PRIVACY POLICY</a></li>
                  <li><a href="">COOKIE NOTICE</a></li>
                  <li><a href="">DLT REGISTRATION FOR COMMERCIAL COMMUNICATION</a></li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li><a href=""> DO NOT DISTURB LIST</a></li>
                  <li><a href="">CONTACT US</a></li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sub_footer">
      © 2023  Airtel India. All Rights Reserved.
    </div>
    </>
  )
}

export default Footer