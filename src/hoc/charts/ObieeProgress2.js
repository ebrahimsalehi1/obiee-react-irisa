import React from 'react'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/styles'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import LinearProgress from '@material-ui/core/LinearProgress';

const useStylePaper = makeStyles(theme=>({
  root:{
      color: '#263238',
      transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      backgroundColor: '#fff',
      padding: '24px'      
  },
  elevation1: {
    boxShadow:' 0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)'
  },
  rounded: {
    borderRadius: '4px'
  }  
}))

const useStyleTypography = makeStyles(theme=>({
  root:{
    margin:0
  },
  colorTextSecondary: {
    color: '#546e7a'
  },
  gutterBottom: {
    marginBottom: '0.35em'
  },
  overline: {
    fontSize: '0.75rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 500,
    lineHeight: 2.66,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase'
  }
}))

const useStyleBox = makeStyles(theme=>({
  gen: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
  }
}))

const useStyleProgress = makeStyles(theme=>({
  colorSecondary: {
    backgroundColor: 'rgb(191, 188, 247)'
  },
  root: {
    height: '4px',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: '3px',
  },
  other:{
      margin: '0px 8px',
      flexGrow: 1    
  }  
}));

export default function Progress(){
const classesPaper = useStylePaper();
const classesTypography = useStyleTypography();
const classesBox = useStyleBox();
const classesProgress = useStyleProgress();

  return (
    <Paper className={
      clsx(classesPaper.root,
        classesPaper.elevation1,
        classesPaper.rounded        
      )      
    }>
      <Typography component={"h3"} className={clsx(
          classesTypography.colorTextSecondary,
          classesTypography.gutterBottom,
          classesTypography.overline,
          classesTypography.root
        )}>System Health</Typography>
        <Box className={clsx(classesBox.gen)}>
        <Typography component={"h3"} className={clsx(
          classesTypography.colorTextSecondary,
          classesTypography.gutterBottom,
          classesTypography.overline,
          classesTypography.root
        )}>97%</Typography>
      <LinearProgress 
      className={clsx(
        classesProgress.colorSecondary,
        classesProgress.root,
        classesProgress.other)}
      variant="determinate" value={97} />

        </Box>
    </Paper>
  )
}