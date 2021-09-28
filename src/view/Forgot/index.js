import React, { useState } from 'react';

// Component
import Hero from '../../components/Hero';
import Footer from '../../layouts/Footer'
import Topography from '../../components/Topography'

// Images
import logo from '../../assets/img/logo/jogja.png';
import background from '../../assets/img/bg-jogja.jpg';


import { Link } from 'react-router-dom';
import { ExclamationCircle } from 'react-bootstrap-icons';
import { ArrowLeftCircle } from 'react-bootstrap-icons';



function Index(props) {

    const appName = "Lupa Password"
    const deskripsi = "Selamat datang kembali di"
    const title = "Yogyakarta Blended Learning"
    const [email, setEmail] = useState('');
    const [validationEmail, setValidationEmail] = useState();
    const [loading, setLoading] = useState();




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
                    <div className="logo-title mt-5 mb-5">
                        <div className="row mb-5">
                            <div className="logo col-3">
                                <img src={logo} alt={appName} />
                            </div>
                            <div className="deskripsi col-9 pt-3">
                                {deskripsi}
                                <h4>
                                    <b>
                                        {title}
                                    </b>
                                </h4>
                            </div>
                        </div>


                    </div>
                    <div className="main-container mb-4">


                        <div className="form-title mb-3">
                            <div className="mb-0">
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
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Masukkan email" className="form-control px-3" autoFocus required />
                                    {
                                        validationEmail ?
                                            <div className="invalid-feedback d-block">
                                                <ExclamationCircle /> Email wajib diisi
                                                </div>
                                            : null
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
                                    <Link className="link" to="/"> <ArrowLeftCircle/>  Kembali</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Footer appName={appName} />
                </Hero>


            </div>



        </section>

    );
}

export default Index;