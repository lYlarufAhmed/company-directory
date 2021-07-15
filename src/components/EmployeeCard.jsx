import makeStyles from "@material-ui/core/styles/makeStyles";
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({

    paper: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(3),
        textAlign: 'left',
        color: theme.palette.text.primary,
        width: '50%',
    },
}));
export default function EmployeeCard({data}) {
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <Typography variant={'h6'} gutterBottom style={{textTransform: 'uppercase'}}>{data.name}</Typography>
            <Typography variant={'subtitle1'} style={{fontWeight: 'bold'}}>Address:</Typography>
            <Typography variant={'body1'}>{data.address}</Typography>
        </Paper>
    )
}