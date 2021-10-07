import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

// Component
import Hero from '../../components/Hero';
import Footer from '../../components/Footer'
import Topography from '../../components/Topography'

// Images
import logo from '../../assets/img/logo/jogja.png';
import background from '../../assets/img/bg-jogja.jpg';
import iconEyeShow from '../../assets/img/icon/Eye_show.svg';
import iconEyeHide from '../../assets/img/icon/Eye_hide.svg';


import { Link } from 'react-router-dom';
import { ExclamationCircle } from 'react-bootstrap-icons';
import { ArrowLeftCircle } from 'react-bootstrap-icons';
import { Check2Circle } from 'react-bootstrap-icons';
import { XCircle } from 'react-bootstrap-icons';



function Index(props) {


    const appName = "Forgot"
    const deskripsi = "Selamat datang kembali di"
    const title = "Yogyakarta Blended Learning"
    const [password, setPassword] = useState('');
    const [password_repeat, setPassword_repeat] = useState('');
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [validation, setValidation] = useState();
    const [cektoken, setCekToken] = useState();


    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const [rePasswordShown, setRePasswordShown] = useState(false);
    const toggleRePasswordVisiblity = () => {
        setRePasswordShown(rePasswordShown ? false : true);
    };

    const queryParams = new URLSearchParams(window.location.search);
    const email = queryParams.get('email');
    const token = queryParams.get('token');

    const doValidation = () => {
        password !== password_repeat ? setValidation(true) : doSend();
    }

    useEffect(() => {
        console.log("testess");
        
        
        

        const doCekToken = () => {
            console.log('cek token');

            let data = { email, token };

            fetch("/_api/main/reset", {
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
                            setCekToken(false);
                            return;
                        }
                        if (result.error) {
                            setCekToken(404);
                        }
                    }
                )
                .catch(error => {
                    setCekToken(true)
                    setCekToken(404)
                })
        }

        const doValidationToken = () => {
            console.log(email);
            email === null ? window.location.href = '/' : doCekToken();
        }

        doValidationToken();

        
    }, [])

    const doSend = () => {
        let data = { email, token, password };
        setValidation(false);
        setLoading(true);
        setError(false);

        fetch("/_api/main/reset", {
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
            })
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
                    {cektoken === 404 ? 
                        <div>
                            <div className="form-title mb-4">
                                <div className="mb-3">
                                    <h5>Invalid token</h5>
                                </div>

                                <div className="d-flex">
                                    <div className="icon">
                                        <XCircle size="30" color="#E05D5D" />
                                    </div>
                                    <div className="desc px-2">
                                        <p>Silahkan request penggantian password kembali. <Link className="link" to="/forgot">Lupa password</Link> </p>
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
                            {success ?
                                <div>
                                    <div className="form-title mb-4">
                                        <div className="mb-3">
                                            <h5>Reset password</h5>
                                        </div>

                                        <div className="d-flex">
                                            <div className="icon">
                                                <Check2Circle size="30" color="#00A19D" />
                                            </div>
                                            <div className="desc px-2">
                                                <p>Reset password berhasil! Password akun kamu berhasil dirubah.</p>
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
                                            <h5>Reset password</h5>
                                        </div>
                                        <div>
                                            <p>Silahkan masukkan password baru untuk akun <b>{email}</b>.</p>
                                        </div>
                                    </div>

                                    <div className="main-form">
                                        <form>
                                            <div className="mb-2">
                                                <label htmlFor="email">Password</label>
                                                <div className="d-flex input-password">
                                                    <input error={error} onChange={(e) => setPassword(e.target.value)} type={passwordShown ? "text" : "password"} name="password" id="password" placeholder="Masukkan password" className="form-control px-3" required />
                                                    <div className="input-group-append form-control-feedback">
                                                        <div className="input-group-text toggle-password">
                                                            <img onClick={togglePasswordVisiblity} className="icon-btn" alt="eye" src={passwordShown ? iconEyeHide : iconEyeShow} style={{ width: '25px', height: '25px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="email">Ulangi Password</label>
                                                <div className="d-flex input-password">
                                                    <input error={error} onChange={(e) => setPassword_repeat(e.target.value)} type={rePasswordShown ? "text" : "password"} name="password_repeat" id="password_repeat" placeholder="Masukkan ulang password" className="form-control px-3" required />
                                                    <div className="input-group-append form-control-feedback">
                                                        <div className="input-group-text toggle-password">
                                                            <img onClick={toggleRePasswordVisiblity} className="icon-btn" alt="eye" src={rePasswordShown ? iconEyeHide : iconEyeShow} style={{ width: '25px', height: '25px' }} />
                                                        </div>
                                                    </div>
                                                </div>
                                                {
                                                    validation ?
                                                        <div className="invalid-feedback d-block">
                                                            <ExclamationCircle /> Password tidak sama
                                                        </div>
                                                        : ''
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
                    }
                        

                    </div>
                </Hero>
            </div>
            <Footer appName={appName} />



        </section>

    );
}

export default Index;