import React from 'react';

const Home = () => {
    return (
        <div>
           <div className="carousel w-full h-96">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src="https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?ixlib=rb-4.0.3&dl=yayaq-destination-ptj2xDWxEJU-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full ">
    <img src="https://images.unsplash.com/photo-1573047330191-fb342b1be381?ixlib=rb-4.0.3&dl=jcs-chen-jdTLcwsJkPg-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&dl=fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg&w=1920&q=80&fm=jpg&crop=entropy&cs=tinysrgb" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>

  </div> 
  
</div>
<div className="card-container mt-9 mb-9 ml-5 flex justify-center  gap-3 lg:flex-row sm:flex-col ">
    <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://images.pexels.com/photos/7545791/pexels-photo-7545791.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-7545791.jpg&fm=jpg&h=600&w=600&fit=crop&_gl=1*1ag236n*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2NjIwMzQ4Ny45LjEuMTY2NjIwMzY0MC4wLjAuMA.." alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Standard Single Room</h2>
    <p>Standard Single Rooms are designed in open concept living area and have many facilities.</p>
    <div className="card-actions justify-end">
    <button className="btn btn-outline btn-accent">BOOK NOW</button>    </div>
  </div>
</div>
    <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://images.pexels.com/photos/7535034/pexels-photo-7535034.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-7535034.jpg&fm=jpg&h=600&w=600&fit=crop&_gl=1*107rjxf*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2NjIwMzQ4Ny45LjEuMTY2NjIwMzczNC4wLjAuMA.." alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title ">Couple Power Room</h2>
    <p>Superior couple rooms are perfectly equipped for traveling couples or friends.</p>
    <div className="card-actions justify-end">
    <button className="btn btn-outline btn-accent">BOOK NOW</button>    </div>
  </div>
</div>
    <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://images.pexels.com/photos/11671089/pexels-photo-11671089.jpeg?cs=srgb&dl=pexels-deno-wang-11671089.jpg&fm=jpg&h=600&w=600&fit=crop&_gl=1*s05dvw*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY2NjIwMzQ4Ny45LjEuMTY2NjIwMzg2OC4wLjAuMA.." alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Family Capacity Room</h2>
    <p>Have lots of in-room facilities and are designed in open-concept living area.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline btn-accent">BOOK NOW</button>
    </div>
  </div>
</div>
    </div>
        </div>
    );
};

export default Home;