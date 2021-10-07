import React, { useState } from 'react';
import jQuery from 'jquery';

// Component
import Hero from '../../components/Hero';
import Footer from '../../components/Footer'
import Topography from '../../components/Topography'

// Images
import logo from '../../assets/img/logo/jogja.png';
import background from '../../assets/img/bg-jogja.jpg';


import { Link } from 'react-router-dom';
import { ExclamationCircle } from 'react-bootstrap-icons';
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import { Check2Circle } from 'react-bootstrap-icons';
import { Envelope } from 'react-bootstrap-icons';



function Index(props) {

    // function getCookie(name) {
    //     var cookieValue = null;
    //     if (document.cookie && document.cookie !== '') {
    //         var cookies = document.cookie.split(';');
    //         for (var i = 0; i < cookies.length; i++) {
    //             var cookie = jQuery.trim(cookies[i]);
    //             if (cookie.substring(0, name.length + 1) === (name + '=')) {
    //                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
    //                 break;
    //             }
    //         }
    //     }
    //     return cookieValue;
    // }

    const appName = "Forgot"
    const deskripsi = "Selamat datang kembali di"
    const title = "Yogyakarta Blended Learning"
    const [email, setEmail] = useState('');
    // const [csrf, setCsrf] = useState('');
    const [validationEmail, setValidationEmail] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    // const csrftoken = getCookie('csrftoken');
    // const [csrf, setCsrf] = useState(csrftoken);





    const doValidation = () => {
        setValidationEmail(false)
        if (email === '') {
            setValidationEmail(true)
            setEmail('');
        } else {
            doSend()
        }

    }
    const doSend = () => {
        let data = { email };
        setLoading(true);
        setValidationEmail(false)
        setError(false)

        // setCsrf(csrftoken)

        // let dataEmail = data.email
        // let dataCsrf = data.csrf

        // let dataCok = { dataEmail, dataCsrf }

        console.log(data)

        


        fetch("/_api/main/forgot", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)


        })
            .then(res => {

                return res.json();

            }
            ).then(
                (result) => {


                    if (result.success) {
                        // window.location.href = result.redirect_uri;
                        setSuccess(true);
                        setError(false);
                        return;
                    }

                    if (result.error) {
                        setError(404);
                        console.log(error);


                    }

                    setLoading(false)
                    console.log(error);




                }
            )
            .catch(error => {
                setError(true)
                setLoading(false)

                console.log(error);
            }
        )


    }

    return (
        <section>
            <Topography />

            <div className="d-flex">
                <Hero
                    appName={appName}
                    logo={logo}
                    deskripsi={deskripsi}
                    title={title}
                    background={background}
                >
                    <div className="logo-title mt-5">
                        <div className="row mb-5">
                            <div className="logo col-3">
                                <img src={logo} alt={appName} />
                            </div>
                            <div className="deskripsi col-9 pt-3">
                                {/* {deskripsi} */}
                                <h2>
                                    <b>
                                        {title}
                                    </b>
                                </h2>
                            </div>
                        </div>


                    </div>
                    <div className="main-container" data-page={appName} data-aos={"fade-up"}>

                    {success ? 
                    <div>
                        <div className="form-title mb-4">
                            <div className="mb-3">
                                <h5>Lupa password</h5>
                            </div>
                            
                            <div className="d-flex">
                                <div className="icon">
                                    <Envelope size="30" color="#505254" />
                                </div>
                                <div className="desc px-2">
                                    <p>Email berhasil dikirim! Silahkan periksa email untuk petunjuk penggantian password</p>
                                </div>
                            </div>
                        </div>

                        <div className="main-form">
                            <div className="col-12 text-center back">
                                <Link className="link" to="/"> <ArrowLeftCircle />  Kembali</Link>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="form-title mb-3">
                            <div className="mb-3">
                                <h5>Lupa password</h5>
                            </div>
                            <div>
                                <p>Silahkan masukkan email yang kamu gunakan untuk mendaftar. Kami akan mengirimkan email pentunjuk untuk mengganti password.</p>
                            </div>
                        </div>

                        <div className="main-form">
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="email">Email</label>
                                    <input error={error} value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Masukkan email" className="form-control px-3" autoFocus required />
                                    {
                                        validationEmail ?
                                            <div className="invalid-feedback d-block">
                                                <ExclamationCircle /> Email wajib diisi
                                            </div>
                                            : null
                                    }
                                    {
                                        error === 404 ?
                                            <div className="invalid-feedback d-block">
                                                <ExclamationCircle /> Email tidak ditemukan
                                            </div>
                                            : ''
                                    }
                                </div>


                                <button type="submit" className="form-control mb-4" onClick={(e) => { e.preventDefault(); doValidation() }}>
                                    {
                                        loading ?
                                            <div className="loading-container">
                                                <span className="spinner-border text-light loading" role="status"></span> Tunggu sebentar
                                            </div>
                                            : "Kirim"
                                    }
                                </button>

                                <div className="col-12 text-center back">
                                    <Link className="link" to="/"> <ArrowLeftCircle />  Kembali</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    }
                        
                    </div>
                </Hero>


            </div>
            <Footer appName={appName} />



        </section>

    );
}

export default Index;