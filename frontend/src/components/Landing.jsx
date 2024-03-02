import React from 'react';

import Hat from '../assets/Hat.webp';

export default function Landing() {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h2>THE HAT COLLECTION</h2>
          <p>Elevate your style with our stunning hat designs.</p>
          <div className='flex-col-details'>
            <div className='flex-details'>
              <h3>Price</h3>
              <p>$ 67.99</p>
            </div>
            <div className='flex-details'>
              <h3>Material</h3>
              <p>Linen</p>
            </div>
            <div className='flex-details'>
              <h3>Size</h3>
              <p>XL</p>
            </div>
          </div>
          <button className='button-orange' id='shop-now'>Shop now</button>
        </div>
        <img src={Hat} alt="Image Title" className="card-image" />
      </div>
    </>
  );
}
