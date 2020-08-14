import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Report,ReportOff,ReportProblem,MoreVert } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

    const {children,title,subheader,avatarText,content,onUsers,onApproles,onUserOfApproles,onReports} = props;

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
      
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
            {
                children
            }
            </CardContent>

            <CardActions>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Grid container spacing={1} direction="column">
                    <Grid item xs={12} md={12}>
                    <Button size="large" variant="contained" color="primary" onClick={onUsers}>Users</Button>
                    </Grid>
                    <Grid item xs={12} md={12}>
                    <Button size="large" variant="contained" color="primary" onClick={onApproles}>Approles</Button>
                    </Grid>
                    <Grid item xs={12} md={12}>
                    <Button size="large" variant="contained" color="primary" onClick={onUserOfApproles}>User Approles</Button>
                    </Grid>
                    <Grid item xs={12} md={12}>
                    <Button size="large" variant="contained" color="primary" onClick={onReports}>Reports</Button>
                    </Grid>
                </Grid>
                </CardContent>
            </Collapse>

        </Card>
    )
}
