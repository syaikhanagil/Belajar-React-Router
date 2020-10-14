import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Docs extends Component{
    render(){
        return(
            <div>
                <h1>This Docs Pages</h1>
                <button><Link to='/about'>Pindah Ke Halaman About</Link></button>
            </div>
        )
    }
}

export default Docs;