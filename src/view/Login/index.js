import React, { useState } from 'react';

// Component
import Hero from '../../components/Hero';
import Footer from '../../components/Footer'
import Topography from '../../components/Topography'

// Images
import logo from '../../assets/img/logo/jogja.png';
import iconEyeShow from '../../assets/img/icon/Eye_show.svg';
import iconEyeHide from '../../assets/img/icon/Eye_hide.svg';

import { Link } from 'react-router-dom';
import { ExclamationCircle } from 'react-bootstrap-icons';



function Index(props) {

    const appName = "Login"
    const deskripsi = "Selamat datang kembali di"
    const title = "Yogyakarta Blended Learning"
    const [keepLogin, setKeepLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [validationEmail, setValidationEmail] = useState();
    const [password, setPassword] = useState('');
    const [validationPassword, setValidationPassword] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const handlerSetKeepLogin = () => setKeepLogin(!keepLogin);

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    // const [toastShown, setToastShown] = useState();
    // const toggleToastHide = () => {
    //     setToastShown(toastShown ? false : true)
    // }

    
    const doValidation = () => {
        setValidationEmail(false)
        setValidationPassword(false)
        if (email === '' && password === '') {
            setValidationEmail(true)
            setValidationPassword(true)
            setEmail('');
            setPassword('');
        } else if (email === '') {
            setValidationEmail(true)
            setEmail('');
        } else if (password === '') {
            setValidationPassword(true)
            setPassword('');
        } else {
            doLogin()
        }

    }
    const doLogin = () => {
        let data = { email, password, keepLogin };
        setLoading(true);
        setValidationEmail(false)
        setValidationPassword(false)

        fetch("/_api/main/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),


        })
            .then(res => {

                return res.json();
                
            }
            ).then(
                (result) => {


                    if (result.success) {
                        window.location.href = result.redirect_uri;
                        return;
                    }

                    if (result.error) {
                        setError(result.error.code);

                    }

                    setLoading(false)

                    
                    
                }
            )
            .catch(error => {
                setError(true)
                setLoading(false)
            }
            )
    }

    return (
        <section>
            <Topography />
            {error ? 
                <div className="position-fixed top-0 end-0 p-4 p-lg-3" style={{ zIndex: '11' }} data-aos={"fade-left"}>
                    <div className="toast align-items-center text-white border-0 d-block" role="alert" aria-live="assertive" aria-atomic="true" data-autohide="true" data-delay="2000">
                        <div className="d-flex">
                            <div className="toast-body">
                                <ExclamationCircle size="18" />  &nbsp;&nbsp;Email atau password salah.&nbsp;&nbsp;
                            </div>
                            {/* <button onClick={toggleToastHide} type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button> */}
                        </div>
                    </div>
                </div>
            : ''}
            
            <div>
                <Hero
                    appName={appName}
                    logo={logo}
                    deskripsi={deskripsi}
                    title={title}
                >
                    <div className="logo-title mt-5 mb-2">
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
                        <div className="main-switch-btn col-12 col-sm-12 col-xs-12">
                            <Link to="/" className="col-md-6 col-6 btn switch-btn-login switch-active">Masuk</Link>
                            <Link to="/register" className="col-md-6 col-6 btn switch-btn-register">Daftar</Link>
                        </div>

                        <div className="form-title mb-3">
                            <div className="mb-0">
                                <h5>Masuk</h5>
                            </div>
                            <div>
                                <p>Silahkan masuk menggunakan akun kamu</p>
                            </div>
                        </div>

                        <div className="main-form">
                            <form>
                                <div className="mb-2">
                                    <label htmlFor="email">Email</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Masukkan email / username" className="form-control px-3" required />
                                    {
                                        validationEmail ?
                                            <div className="invalid-feedback d-block">
                                                <ExclamationCircle /> Email / username tidak boleh kosong
                                                </div>
                                            : null
                                    }
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password">Password</label>
                                    <div className="d-flex input-password">
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type={passwordShown ? "text" : "password"} name="password" id="password" placeholder="Masukkan password" className="form-control px-3" required />
                                        <div className="input-group-append form-control-feedback">
                                            <div className="input-group-text toggle-password">
                                                <img onClick={togglePasswordVisiblity} className="icon-btn" alt="eye" src={passwordShown ? iconEyeHide : iconEyeShow} style={{ width: '25px', height: '25px' }} />
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        validationPassword ?
                                            <div className="invalid-feedback d-block">
                                                <ExclamationCircle /> Password tidak boleh kosong
                                        </div>
                                            : null
                                    }
                                </div>
                                
                                <div className="mb-4 d-flex">
                                    <div className="col-6 form-check">
                                        <input onChange={handlerSetKeepLogin} type="checkbox" name="keepLogin" id="keepLogin" className="form-check-input" />
                                        <label htmlFor="keepLogin" className="foem-check-login">Ingat saya</label>
                                    </div>
                                    { error ?
                                        <div className="col-6 forgot-password">
                                            <Link className="link" to="/forgot">Lupa password?</Link>
                                        </div>
                                        :
                                        ''
                                    }
                                    
                                </div>
                                
                                <button type="submit" className="form-control mb-2" onClick={(e) => { e.preventDefault(); doValidation() }}>
                                    {
                                        loading ?
                                            <div className="loading-container">
                                                <span className="spinner-border text-light loading" role="status"></span> Tunggu sebentar
                                            </div>
                                            : "Masuk"
                                    }
                                </button>
                                
                                <div className="col-12 text-center">
                                    <span data-testid="not-have-account">Belum punya akun? <Link className="link" to="/register">Daftar disini</Link></span>
                                </div>
                            </form>
                        </div>
                        
                    </div>

                </Hero>

            </div>
            <Footer appName={appName} />

            
           
        </section>
        
    );
}

export default Index;