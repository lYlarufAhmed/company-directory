import makeStyles from "@material-ui/core/styles/makeStyles";
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({

    paper: {
        marginTop: theme.spacing(3),
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        width: '100%'
    },
}));
export default function CompanyCard({data, companyId, detailPage}) {
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <Typography variant={'h6'} gutterBottom style={{textTransform: 'uppercase'}}>{data.name}</Typography>
            <Typography variant={'subtitle1'} style={{fontWeight: 'bold'}}>Address:</Typography>
            <Typography variant={'body1'}>{data.address}</Typography>

            <Typography variant={'subtitle1'} style={{fontWeight: 'bold'}}>Revenue:</Typography>
            <Typography variant={'body1'}>{data.revenue}</Typography>
            <Typography variant={'subtitle1'} style={{fontWeight: 'bold'}}>Phone:</Typography>
            <Typography variant={'body1'}>{data.phone}</Typography>
            {!detailPage && <Typography variant={'h6'}>
                <Link to={`/${companyId}`}>Company Overview</Link>
            </Typography>}

        </Paper>
    )
}