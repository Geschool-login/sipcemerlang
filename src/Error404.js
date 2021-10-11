import React from 'react';
import { withRouter } from 'react-router'

import img from './assets/img/404.svg'


const C = (props) =>{

    // let title = props.title;
    
    return(

    <div className="error-notfound" style={{textAlign: 'center', paddingTop: 50}} >

        {/* <h1 style={{fontSize: '96pt'}}>404</h1> */}

        <img className="error-img" src={img} alt="404" />
        
        <h3>Halaman tidak dapat di temukan.</h3>

        <p>Alamat yang dituju tidak tersedia.<br/> Pastikan alamat pemanggilan sudah benar dan coba beberapa saat lagi.</p>

        <button  style={{padding: 8, marginTop: 10, borderRadius: 10}} onClick={()=>{props.history.replace('/')}} >Home</button>
    </div>
)};

export default withRouter(C);

