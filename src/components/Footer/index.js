import React from 'react';

import './style.css'


function Index( props ) {
    return (
        <footer className="col-12 footer">
            <div className="justify-content-center">
                <div className="col-12 text-light">
                    <ul className="list-inline d-flex footer-list">
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://s.id/geschool" className="footer-link bold">Road Map to Geschool</a>
                        </li>
                    </ul>
                    <ul className="list-inline d-flex footer-list link-list">
                        <li>
                            <a target="_blank" rel="noreferrer" href="http://disdikbud.magelangkota.go.id/" className="footer-link">Dinas Pendidikan Magelang</a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.magelangkab.go.id/" className="footer-link">Pemda Magelang</a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="http://disdikbud.magelangkab.go.id/" className="footer-link">Dikpora Magelang</a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 copyright mt-2">
                    &copy; {props.copyright}
                </div>
            </div>
        </footer>
    );
}

export default Index;