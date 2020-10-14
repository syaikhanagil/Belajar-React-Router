import React, { Component } from 'react'
import './Home.scss'
import {Link} from 'react-router-dom'

class Home extends Component{
    render(){
        return(
            <div className='home-container'>
                <h1>This Home Pages</h1>
                <button><Link to='/docs'>Pindah Halaman</Link></button>
            </div>
        )
    }
}

export default Home;