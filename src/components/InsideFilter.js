import React from 'react'
import IndideNav from './IndideNav'
import { Link } from 'react-router-dom'
const InsideFilter = () => {
  return (
    <div className='insidefilter'>
    <Link className='i-link'  to={'/'}>
    <IndideNav name={'Delivery Time'}/>
    </Link>
    <Link className='i-link' to={'/rating'}>
    <IndideNav name={'Rating 4.0+'}/>
    </Link>
    <Link className='i-link' to={'/pureveg'}>
    <IndideNav name={'Pure Veg'}/>
    </Link>


    </div>
  )
}

export default InsideFilter