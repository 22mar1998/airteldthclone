import React from 'react'

const Features = () => {
  return (<>
    {/* <div>Features</div> */}
    <div className="features" >
      <div className="f_topbg"></div>
      <div className="container"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false">
        <div className="row py-5 px-2">
          <div className="col-lg-4 col-md-6 f_text">
            <h3><i className="ri-hd-fill"></i></h3>
            <h6 className='display-6'>HD clarity</h6>
          </div>
          <div className="col-lg-4 col-md-6 f_text">
            <h3><i className="ri-hd-fill"></i></h3>
            <h6 className='display-6'>Dolby sound</h6>
          </div>
          <div className="col-lg-4 col-md-6 f_text">
            <h3><i className="ri-tv-2-line"></i></h3>
            <h6 className='display-6'>550+ Channels</h6>
          </div>
          <div className="col-lg-4 col-md-6 f_text">
            <h3><i className="fa-solid fa-gear"></i></h3>
            <h6 className='display-6'>Free and safe
              installation</h6>
          </div>
          <div className="col-lg-4 col-md-6 f_text">
            <h3><i className="ri-remote-control-line"></i></h3>
            <h6 className='display-6'>Pause, record
              and play live TV</h6>
          </div>
          <div className="col-lg-4 col-md-6 f_text">
            <h3><i className="fa-brands fa-usb"></i></h3>
            <h6 className='display-6'>Play videos
              from pendrive</h6>
          </div>

        </div>
      </div>

    </div>
  </>
  )
}

export default Features