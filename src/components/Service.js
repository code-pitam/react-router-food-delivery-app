import React from 'react'
import { LabelHTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
const Service = () => {
  return (
    <div className='service'>
        <div className='pagination'><span>Home</span>/<span>India</span>/ <span className='last'>Kolkata Resrurants</span></div>
        <div className="select-service">
            <div className="delivery s-section">
                <Link className='link' to={'/'}>
                <img alt="illustration" src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png" loading="lazy" class="sc-s1isp7-5 jQwYOW"/>
                <h3>Delivery</h3>

                </Link>
                
            </div>
            <div className="Dining s-section">
                <Link className='link' to={'/diningout'} >
                <img alt="illustration" src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp" loading="lazy" class="sc-s1isp7-5 jQwYOW"/>
                <h3>Dining OUt</h3>

                </Link>
                
            </div>
            <div className="nighlife s-section">
                <Link className='link' to={'/nightlife'} >
                <img alt="illustration" src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png?output-format=webp" loading="lazy" class="sc-s1isp7-5 jQwYOW"/>
                <h3>Nightlife</h3>

                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Service