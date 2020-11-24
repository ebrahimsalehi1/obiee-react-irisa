import React from 'react';
//import axios from 'axios';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import {getText} from '../../utils/Utils';
//import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ObieeButtonOperation from '../../widgets/ObieeButtonOperation';

const useStyles = makeStyles(theme=>({
    root: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      formControl: {
        margin: 0,
        minWidth: 190,
      },
      cardContent:{
        root:{
          padding:0,
          border:'none'
        }
      }
}));

export default function ObieeItemApprole(props){

    const classes = useStyles();

    const{mode,onAdd,onEdit,onDelete,onCancel,onExternalEvent} = props;

    console.log('ObieeItemApprole-props',props);

    const [approleName,setApproleName] = React.useState(props.approle && mode!=='add' ? props.approle.name:'');
    const [approleDesc,setApproleDesc] = React.useState(props.approle && mode!=='add' ? props.approle.description : '');
    const [approleType,setApproleType] = React.useState(mode!=='add' && props.approle.baseRoles && props.approle.baseRoles.length>0 ? props.approle.baseRoles[0].name:'');
    const [appType,setAppType] = React.useState(props.approle && mode!=='add' ? props.approle.type:'');
    const [approleDisplayName,setApproleDisplayName] = React.useState(props.approle && mode!=='add' ? props.approle.displayName:'');

    const strApproleDisplayName = getText('Approle Display Name');
    const strApproleName = getText('Approle Name');
    const strApproleType = getText('Application Role Type');
    const strAppType = getText('Application Type');
    const strApproleDesc = getText('Approle Desc');
    const strSave = getText('Save');
    //const strEdit = getText('Edit');
    //const strDelete = getText('Delete');
    const strCancel = getText('Cancel');

    const createRow = () => {
      const result = {
        name: approleName  ,
        displayName: approleDisplayName,
        description: approleDesc,
        appId: "obi",
        type:appType,
        baseRoles:[{name:approleType}]
      };

      return result;
    }

    function validation(){
      if(approleName.length === 0 || 
         approleDisplayName.length === 0 ||
         approleDesc.length === 0 ||
         appType.length === 0 ||
         approleType.length === 0
        )
        return false;
      
        return true;
    }
    
    return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.cardContent.root}>
      <Grid container spacing={1} >

      {(mode==='add' || mode==='edit') && 
      <Grid item xs={12} md={12}>
          <TextField  
          label={strApproleName}
          placeholder={strApproleName}
          variant={"outlined"}
          fullWidth
          value={approleName}
          onChange={(e)=>setApproleName(e.target.value)}
          />
      </Grid>
      }

      {mode==='read' && 
      <Grid item xs={12} md={3}>
            <Typography  
            variant="h6"
            component="span"
            >{approleName}</Typography>
        </Grid>
      }

      {(mode==='add' || mode==='edit') && 
      <Grid item xs={12} md={12}>
            <TextField  
            label={strApproleDisplayName}
            placeholder={strApproleDisplayName}
            variant={"outlined"}
            fullWidth
            value={approleDisplayName}
            onChange={e=>setApproleDisplayName(e.target.value)}
            />
        </Grid>
      }

      {mode==='read' && 
      <Grid item xs={12} md={3}>
            <Typography  
            variant="h6"
            component="span"
            >{approleDisplayName}</Typography>
        </Grid>
      }

      {(mode==='add' || mode==='edit') && 
        <Grid item xs={12} md={6}>
        <FormControl variant="outlined" fullWidth className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">{strAppType}</InputLabel>
        <Select
          //labelId="demo-simple-select-outlined-label"
          //id="demo-simple-select-outlined"
          value={appType}
          onChange={(e)=>{setAppType(e.target.value)}}
          label={strAppType}
        >
          <MenuItem value={'BI'}>BI</MenuItem>
          <MenuItem value={'AN'}>AN</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      }

      {/* {mode==='read' &&
      <Grid item xs={12} md={3}>
            <Typography  
            variant="h6"
            component="span"
            >{strAppType}</Typography>
        </Grid>
      } */}

      {(mode==='add' || mode==='edit') &&
        <Grid item xs={12} md={6}>
        <FormControl variant="outlined" fullWidth className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">{strApproleType}</InputLabel>
        <Select
          //labelId="demo-simple-select-outlined-label"
          //id="demo-simple-select-outlined"
          value={approleType}
          onChange={(e)=>{setApproleType(e.target.value)}}
          label={strApproleType}
        >
          {/* <MenuItem value={'author'}>Author</MenuItem> */}
          <MenuItem value={'BIConsumer'}>Consumer</MenuItem>
          <MenuItem value={'BIServiceAdministrator'}>Admin</MenuItem>
          <MenuItem value={'BIContentAuthor'}>Content Author</MenuItem>
        </Select>
      </FormControl>
        </Grid>
      }

      {mode==='read' && 
      <Grid item xs={12} md={3}>
            <Typography  
            variant="h6"
            component="span"
            >{approleType}</Typography>
      </Grid>
      }      

      {(mode==='add' || mode==='edit') &&
        <Grid item xs={12} md={12}>
            <TextField  
            label={strApproleDesc}
            placeholder={strApproleDesc}
            variant={"outlined"}
            fullWidth
            value={approleDesc}
            onChange={(e)=>setApproleDesc(e.target.value)}
            />
        </Grid>
      } 


      {/* {mode==='read' &&
      <Grid item xs={12} md={3}>
      <IconButton 
          type="submit" 
          className={classes.iconButton} 
          aria-label="edit" 
          onClick={()=>onExternalEvent(props.approle)}
          > 
          <EditIcon />
          </IconButton>

          <IconButton 
          type="submit" 
          className={classes.iconButton} 
          aria-label="delete" 
          onClick={()=>{onDelete(approleName)}}
          >
          <DeleteIcon />
          </IconButton>                    
      </Grid>
      } */}

      </Grid>

      <Grid item xs={12} md={6}>
      {mode==='add' &&
        <ObieeButtonOperation onExecute={()=>
          {
            if(validation())
              onAdd(createRow());
            else 
              alert('fields must be fill');              
          }} title={strSave} />
      }
      </Grid>

      {/* <Grid item xs={12} md={6}>
      {mode==='add' &&
        <ObieeButtonOperation onExecute={onCancel} title={strCancel} />         
      }
      </Grid> */}

      <Grid item xs={12} md={6}>
      {mode==='edit' &&    
        <ObieeButtonOperation onExecute={()=>
          {
            if(validation())
              onEdit(createRow());
            else 
              alert('fields must be fill');              
          }} title={strSave} />        
      }
      </Grid>

      <Grid item xs={12} md={6}>
      {mode==='edit' &&
        <ObieeButtonOperation onExecute={onCancel} title={strCancel} />         
      }
      </Grid>

      </CardContent>

      {/* <CardActions>
      
      </CardActions> */}

    </Card>
    )
}

ObieeItemApprole.propTypes ={
    mode: PropTypes.oneOf(['read','add','edit']).isRequired,
}
