// import {useDispatch} from "react-redux";
// import {setError, storeNewUserDataMiddleware} from "../redux/actions";
import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import makeStyles from "@material-ui/core/styles/makeStyles";
import {Snackbar} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

export function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export default function FormProvider(props) {
    let classes = useStyles()
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const handleClose = () => {
        setOpenSnackbar(false);
    }


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                {props.children}
            </div>

            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {openSnackbar}
                </Alert>
            </Snackbar>
        </Container>
    )
}