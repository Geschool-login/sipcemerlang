import { Grid } from '@material-ui/core';

import Footer from "../Footer"

function pageLayout( props, children ) {
    return (
        <div>
            <Grid xl={8}>
                { children }
            </Grid>
        </div>
    );
}


export default pageLayout;