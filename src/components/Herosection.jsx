import React from 'react'
// import Dth from '../assets/images/Dth.jpg';
import bg from '../assets/images/bg.jpg';





const Herosection = () => {

  return (<>
    {/* <div>Herosection</div> */}
    <section className="hero_section" id='Home'>
      <div className="hero_overlay">

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 header_text">
              <img src="https://assets.airtel.in/teams/simplycms/web/images/airtel-digital-tv-logo-20122022.svg" width="250px" alt="" />
              <h6 className="display-1 mt-5">
                Superhit offer.
                Superhit entertainment.
              </h6>
              <p className='display-6'>Get DTH HD Box at ₹750 ₹2,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section_2 container-fluid">
      <div className="row">
        <div className="col-lg-8 ms-auto">
          <img src={bg} alt="" className="img-fluid"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out" />
        </div>
      </div>
    </section>

    <section className="offers">

      <div className="row">
        <div className="col-lg-10 mx-auto h3_text o_text">
          <h5 className="display-3 px-2">Unlock savings with our exclusive offers</h5>
          <div className="o_card_cta" >

            <div className="o_card_holder" 
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="false" >
              <div className="o_card">
                <div className="card_overley">
                  <h5>01</h5>
                  <h6>Min. 25% off on 6 months</h6>
                  <p>*applicable in select circles</p>
                </div>
              </div>

            </div>
            <div className="o_card_holder"
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="false" >
              <div className="o_card">
                <div className="card_overley" >
                  <h5>02</h5>
                  <h6>Flat ₹150 off if you already have any dish antenna</h6>
                </div>
              </div>

            </div>
            <div className="o_card_holder"
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="false">
              <div className="o_card">
                <div className="card_overley">
                  <h5>03</h5>
                  <h6>DTH HD Box + antenna starting at ₹400</h6>
                  <p>*applicable in select packs</p>
                </div>
              </div>

            </div>
            <div className="o_card_holder"
                 data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="false">
              <div className="o_card">
                <div className="card_overley">
                  <h5>04</h5>
                  <h6>Add a 2nd DTH connection at a special price of ₹600</h6>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>


  </>
  )
}

export default Herosection