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

export default function Profile(props){

    const classes = useStyles();
    const {userInfo} = props;
    
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
                    value={userInfo.name ? userInfo.name:' '}
                />
            </Grid>

            <Grid item xs={12} md={12}>
                <TextField 
                    label={strDisplayName}
                    placeholder={strDisplayName}
                    variant="outlined"
                    fullWidth
                    disabled
                    value={userInfo.displayName ? userInfo.displayName : ' '}
                />
            </Grid>

            <Grid item xs={12} md={12}>
            <TextField 
                    label={strEmail}
                    placeholder={strEmail}
                    variant="outlined"
                    fullWidth
                    disabled
                    value={userInfo.mail ? userInfo.mail:' '}
                />
            </Grid>

            <Grid item xs={12} md={12}>
            <TextField 
                    label={strMobile}
                    placeholder={strMobile}
                    variant="outlined"
                    fullWidth
                    disabled
                    value={userInfo.mobile ? userInfo.mobile:' '}
                />
            </Grid>

            <Grid item xs={12} md={12}>
            <TextField 
                    label={strTel}
                    placeholder={strTel}
                    variant="outlined"
                    fullWidth
                    disabled
                    value={userInfo.tel ? userInfo.tel : ' '}
                />
            </Grid>

            <Grid item xs={12} md={12}>
            <TextField 
                    label={strInternalTel}
                    placeholder={strInternalTel}
                    variant="outlined"
                    fullWidth
                    disabled
                    value={userInfo.internalTel ? userInfo.internalTel : ' '}
                />
            </Grid>

        </Grid>
        </CardContent>
        </Card>
    )
}
