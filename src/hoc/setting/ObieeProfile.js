import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import CardActions from '@material-ui/core/CardActions';
import {getText} from '../../utils/Utils';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    root:{
        width:'100%'
    }
}));


export default function Profile({userName,displayName,email,mobile,tel,internalTel}){

    const classes = useStyles();
    
    // const [userName,setUserName] = React.useState('');
    // const [displayName,setDisplayName] = React.useState('');
    // const [email,setEmail] = React.useState('');

    const strUserName = getText('User Name');    
    const strDisplayName = getText('Display Name');
    const strEmail = getText('Email');
    const strMobile = getText('Mobile');
    const strTel = getText('Tel');
    const strInternalTel = getText('Internal Telephone');

    return (
        <Card className={classes.root}>
        <CardContent>
        <Grid container spacing={1}>

            <Grid item xs={12} md={12}>
                <TextField 
                    label={strUserName}
                    placeholder={strUserName}
                    variant="outlined"
                    fullWidth
                    disabled
                    value={userName}
                />
            </Grid>

            <Grid item xs={12} md={12}>
                <TextField 
                    label={strDisplayName}
                    placeholder={strDisplayName}
                    variant="outlined"
                    fullWidth
                    disabled
                    value={displayName}
                />
            </Grid>

            <Grid item xs={12} md={12}>
            <TextField 
                    label={strEmail}
                    placeholder={strEmail}
                    variant="outlined"
                    fullWidth
                    disabled
                    value={email}
                />
            </Grid>

            <Grid item xs={12} md={12}>
            <TextField 
                    label={strMobile}
                    placeholder={strMobile}
                    variant="outlined"
                    fullWidth
                    disabled
                    value={mobile}
                />
            </Grid>

            <Grid item xs={12} md={12}>
            <TextField 
                    label={strTel}
                    placeholder={strTel}
                    variant="outlined"
                    fullWidth
                    disabled
                    value={tel}
                />
            </Grid>

            <Grid item xs={12} md={12}>
            <TextField 
                    label={strInternalTel}
                    placeholder={strInternalTel}
                    variant="outlined"
                    fullWidth
                    disabled
                    value={internalTel}
                />
            </Grid>

        </Grid>
        </CardContent>
        </Card>
    )
}
