import React from 'react';

import { Grid } from '@material-ui/core';

import './style.css'


function Index( props ) {
    return (
        <footer className="col-12 footer">
            <Grid container className="justify-content-center">
                <Grid item xs={12} sm={12} md={12} lg={12} className="text-light">
                    <ul className="list-inline d-flex footer-list">
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://sway.office.com/QSg4ukKu1Iy7Gy6U" className="footer-link bold">Road Map to Geschool</a>
                        </li>
                    </ul>
                    <ul className="list-inline d-flex footer-list link-list">
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://jogjakota.go.id/" className="footer-link">Dinas Kota Yogyakarta</a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="http://yogyakarta.siap.web.id/" className="footer-link">Dinas Pendidikan Yogyakarta</a>
                        </li>
                        <li>
                            <a target="_blank" rel="noreferrer" href="https://dikpora.jogjaprov.go.id/" className="footer-link">Dikpora Yogyakarta</a>
                        </li>
                    </ul>
                </Grid>
                <Grid item sm={12} md={12} lg={12} className="copyright mt-2">
                    &copy; 2021 Yogyakarta Blended Learning - Didukung oleh geschool
                </Grid>
            </Grid>
        </footer>
    );
}

export default Index;