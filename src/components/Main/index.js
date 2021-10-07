import React from 'react';

// Component
import Footer from '../../components/Footer'

// CSS
import './style.css'

function index(props) {
    return (
        <div className="col-lg-4 col-md-6 col-12 main">
            {/* <div className="ornament-1"></div> */}
            { props.children }
            <Footer appName={props.appName} />
        </div>
    );
}

export default index;