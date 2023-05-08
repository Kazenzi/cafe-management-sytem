import React from 'react'
import bg from '../assests/bgg.jpg'
import Products from './Products'

function Home() {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white">
                <img src={bg} class="card-img" alt="background" height="550px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                <h5 className="card-title display-3 fw-bold mb-0">ONE STOP FASHION</h5>                   
                    <p className="card-text lead fs-2">DISCOVER YOUR TASTE ,UNLEASH YOUR STYLE! </p>
                </div>
            </div>
        </div>
        <Products/>
        </div>
    )
}

export default Home