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

    const appName = "Register"
    const deskripsi = "Selamat datang kembali di"
    const title = "Yogyakarta Blended Learning"
    const [error, setError] = useState({});
    const [loading, setLoading] = useState();
    const [data, setData] = useState({});


    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const [rePasswordShown, setRePasswordShown] = useState(false);
    const toggleRePasswordVisiblity = () => {
        setRePasswordShown(rePasswordShown ? false : true);
    };


    const onChange = (e) => {
        let d = { ...data };

        d[e.target.name] = e.target.value;


        setData(d);


    }

    const doRegister = () => {


        setLoading(true);
        fetch("/_api/main/register", {
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
                        setError(result.error);

                    }
                    setLoading(false);
                }
            )
            .catch(error => {

                setError(true)
                setLoading(false);
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
                >

                    <div className="logo-title mt-5 mb-5">
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

                    <div className="main-container" data-aos={"fade-up"}>
                        
                        <div className="main-switch-btn col-12 col-sm-12 col-xs-12">
                            <Link to="/" className="col-md-6 col-6 btn switch-btn-login">Masuk</Link>
                            <Link to="/" className="col-md-6 col-6 btn switch-btn-register switch-active">Daftar</Link>
                        </div>

                        <div className="form-title mb-3">
                            <div className="mb-0">
                                <h5>Daftar sebagai siswa</h5>
                            </div>
                            <div>
                                <p>Daftar sebagai guru?&nbsp;<Link className="link" to="/register/teacher">Daftar disini</Link></p>
                            </div>
                        </div>

                        <div className="main-form">
                            <form>
                                <div className="mb-2">
                                    <label htmlFor="name">Nama</label>
                                    <input error={error.name} onChange={onChange} type="text" name="name" id="name" placeholder="Masukkan nama lengkap" className="form-control px-3" required />
                                    {
                                        error.name ?
                                            <div className="invalid-feedback d-block">
                                                <ExclamationCircle /> {error.name[0]}
                                            </div>
                                            : ''
                                    }
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="email">Email</label>
                                    <input error={error.email} onChange={onChange} type="email" name="email" id="email" placeholder="Masukkan email" className="form-control px-3" required />
                                    {
                                        error.email ?
                                            <div className="invalid-feedback d-block">
                                                <ExclamationCircle /> {error.email[0]}
                                            </div>
                                            : ''
                                    }
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="password">Password</label>
                                    <div className="d-flex input-password">
                                        <input error={error.password} onChange={onChange} type={passwordShown ? "text" : "password"} name="password" id="password" placeholder="Masukkan password" className="form-control px-3" required />
                                        <div className="input-group-append form-control-feedback">
                                            <div className="input-group-text toggle-password">
                                                <img onClick={togglePasswordVisiblity} className="icon-btn" alt="eye" src={passwordShown ? iconEyeHide : iconEyeShow} style={{ width: '25px', height: '25px' }} />
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        error.password ?
                                            <div className="invalid-feedback d-block">
                                                <ExclamationCircle /> {error.password[0]}
                                            </div>
                                            : ''
                                    }
                                </div>
                                <div>
                                    <label htmlFor="password_repeat">Ulangi password</label>
                                    <div className="d-flex input-password">
                                        <input error={error.password_repeat} onChange={onChange} type={rePasswordShown ? "text" : "password"} name="password_repeat" id="password_repeat" placeholder="Masukkan ulang password" className="form-control px-3" required />
                                        <div className="input-group-append form-control-feedback">
                                            <div className="input-group-text toggle-password">
                                                <img onClick={toggleRePasswordVisiblity} className="icon-btn" alt="eye" src={rePasswordShown ? iconEyeHide : iconEyeShow} style={{ width: '25px', height: '25px' }} />
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        error.password_repeat ?
                                            <div className="invalid-feedback d-block">
                                                <ExclamationCircle /> {error.password_repeat[0]}
                                            </div>
                                            : ''
                                    }
                                </div>
                                <button type="submit" className="mt-5 form-control" onClick={(e) => { e.preventDefault(); doRegister() }}>
                                    {
                                        loading ?
                                            <div className="loading-container">
                                                <span className="spinner-border text-light loading" role="status"></span> Tunggu sebentar
                                                </div>
                                            : "Daftar"
                                    }
                                </button>
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