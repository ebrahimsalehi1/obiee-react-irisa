import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import {Report,ReportOff,ReportProblem,MoreVert } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    avatar: {
        backgroundColor: 'red[500]',
    }
}));

export default function ObieeCardReport(props){
    const classes = useStyles();

    const {title,subheader,avatarText,content} = props;

    return (
        <Card className={classes.root}>

            <CardHeader 
                avatar={<Avatar aria-label="recipe" className={classes.avatar}>{avatarText}</Avatar>}
                action={<IconButton aria-label="setting"><MoreVert/></IconButton>}
                title={title}
                subheader={subheader}
            />

            {/* <CardMedia
                  component="img"

            ></CardMedia> */}

            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
            {content}
            </Typography>
            </CardContent>

            <CardActions></CardActions>

            <Collapse>
                <CardContent></CardContent>
            </Collapse>

        </Card>
    )
}
