import React from 'react';

import { Grid } from '@material-ui/core';


function Index( props ) {
    return (
        <footer className="col-12">
            <Grid container className="justify-content-center">
                <Grid item xs={12} lg={12} className="text-center text-light" style={{ fontSize: '14px' }}>
                    <p>
                        &copy; 2021 {props.appName} - Didukung oleh Geschool
                    </p>
                </Grid>
            </Grid>
        </footer>
    );
}

export default Index;