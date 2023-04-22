import React, { useState } from 'react'
import ServiceApi from "./Api/ServiceApi"
const Services = () => {
    const [service, setService] = useState(ServiceApi);
    console.log(ServiceApi);
  return (
    <>
      <section className="service-main-container">
        <div className="container service-container">
            <h1 className='main-heading text-center fw-bold'>How to sand money</h1>
            <div className="row">
            {service.map((curEleme) =>{
                const {id, logo, title, info} = curEleme;
                return(
                    <> 
                <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv subdiv" key={id}>
                <i className={`fontawesome-style ${logo}`}></i>
                <h2 className='sub-heading'>{title}</h2>
                <p className='main-hero-para'>{info}</p>
                </div>
                    </>
                )
            })}
            </div>
        </div>
      </section>
    </>
  )
}

export default Services
