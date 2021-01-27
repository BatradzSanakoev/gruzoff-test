import { Grid, Typography } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { useState, useEffect } from 'react';

export default function MyWonderfulComponent({ id, options, children, count }) {

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#e53935',
            }
        }
    });

    const [summ, setSumm] = useState(count);

    useEffect(() => {
        console.log('Origin summ: ' + summ);
        if (id && options && options.params && options.params.fields && options.params.fields.isDynamic) {
            setSumm(summ + 1);
        }
    }, []);

    summ > count && console.log('New summ:' + summ);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Typography variant='h1' color='primary'>
                    Hello World!
            </Typography>
            </ThemeProvider>

            <Grid container>
                <Grid item xs={12}>{children}</Grid>
            </Grid>
        </>
    );
};