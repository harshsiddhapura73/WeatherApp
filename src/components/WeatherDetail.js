import React from 'react'
import './WeatherDetail.css'
import logo from './weather_logo.png'
// import axios from 'axios'
export default function WeatherDetail() {
  return (
    <div className='container'>
        <div className='row mt-3'>
            <div className='col-8 bg-white'>
                <div className='row pt-3'>
                    <div className='col-6'>
                        <div>
                            <p className='text-uppercase'>current weather</p>
                            <p className='text-muted font-weight-bold'>09:51</p>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-5'>
                                <img src={logo} alt='weather logo' width={"150px"}/>
                            </div>
                            <div className='col-5'>
                                <p className='degree-font-size mb-2'>31°</p>
                                <h5 className='text-dark '>RealFeel® 36°</h5>
                            </div>
                        </div>
                    </div>

                    <div className='col-6'>
                         
                        <div className='row justify-content-between pb-2 text-border-bottom default-font-size'>
                            <div className='col-6 '>RealFeel Shade™</div>
                            <div className='col-6 text-right'>34°</div>
                        </div>

                        <div className='row justify-content-between pb-2 text-border-bottom mt-3 default-font-size'>
                            <div className='col-6 '>Air Quality</div>
                            <div className='col-6 text-right'>Unhealthy</div>
                        </div>

                        <div className='row justify-content-between pb-2 text-border-bottom mt-3 default-font-size'>
                            <div className='col-6 '>Wind</div>
                            <div className='col-6 text-right font-weight-bold'>NNE 13 km/h</div>
                        </div>
                        
                        <div className='row justify-content-between pb-2 text-border-bottom mt-3 default-font-size'>
                            <div className='col-6 '>Wind Gusts</div>
                            <div className='col-6 text-right font-weight-bold'>20 km/h</div>
                        </div>
                    </div>
                </div>

                <div className='row pb-3'>
                    <div className='col-6'>
                        <h5 className='font-weight-normal'>Sunny</h5>
                    </div>
                    <div className='col-6 text-right text-uppercase'>
                        <h5>more details <i className="fa fa-arrow-right" aria-hidden="true"></i></h5> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
