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
                            <a target="_blank" rel="noreferrer" href="http://disdikbud.magelangkab .go.id/" className="footer-link">Dikpora Magelang</a>
                        </li>
                    </ul>
                </Grid>
                <Grid item sm={12} md={12} lg={12} className="copyright mt-2">
                    &copy; {props.copyright}
                </Grid>
            </Grid>
        </footer>
    );
}

export default Index;