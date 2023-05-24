import React from 'react';


const Pricing = () => {
  return (
    <>
      <section className="pricing" id='price'>
        <div className="p_container container">
          <div className="row p-5">
            <div className="col-lg-5 col-md-5 p_card">
              {/* <div className="display-1"><i className="ri-price-tag-line"></i></div> */}
              <h6 className="display-5"><span>rs</span> 4999</h6>
              <ul className="price_list">
                <li><i className="ri-arrow-right-line"></i> Normal Box</li>
                <li><i className="ri-arrow-right-line"></i> 10 yr</li>
                <li><i className="ri-arrow-right-line"></i> All channels</li>
              </ul>
              <a href="" className="btn">get plan</a>
            </div>
            <div className="col-lg-5 col-md-5 p_card" >
              {/* <div className="display-1"><i className="ri-price-tag-line"></i></div> */}
              <h6 className="display-5"><span>rs</span> 5999</h6>
              <ul className="price_list">
                <li><i className="ri-arrow-right-line"></i> Smart Box</li>
                <li><i className="ri-arrow-right-line"></i> Internet</li>
                <li><i className="ri-arrow-right-line"></i> All OTT</li>
                <li><i className="ri-arrow-right-line"></i> Wifi</li>
                <li><i className="ri-arrow-right-line"></i> youtube</li>
                <li><i className="ri-arrow-right-line"></i> All Channels</li>


              </ul>
              <a href="" className="btn">get plan</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing