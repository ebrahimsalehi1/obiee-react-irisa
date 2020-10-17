import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import {makeStyles,fade} from '@material-ui/core/styles';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import data from '../../db.json';
const ObieeItemApprole = React.lazy(()=>import("./ObieeItemApprole"));
import ObieeDialog from '../widgets/ObieeDialog';
import ObieeConfirmationDialog from '../widgets/ObieeConfirmationDialog';
import {getText} from '../utils/Utils';
import {appRoleAll,approleCreate,approleEdit,approleDelete} from '../webservice/Approle';
import ObieeShowMessage from '../widgets/ObieeShowMessage';

const useStyles = makeStyles(theme=>({
  root: {
    width: '100%',
    //maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },   
}))

export default function ObieeCrudApprole(props){

    const classes = useStyles();

    //const {url} = props;

    const [approles,setApproles] = React.useState([]); // data.approles
    const [mode,setMode] = React.useState('');
    const [showConfirmDelete,setShowConfirmDelete] = React.useState(false);
    const [search,setSearch] = React.useState('');
    const [approle,setApprole] = React.useState(undefined);
    const [showmessage,setShowmessage] = React.useState('');

    const strSearchApproles = getText('Search approles');

    React.useEffect(()=>{

      async function fetchData(){

        const result = await appRoleAll();

        if(result.errorMessage){
          setShowmessage(result.errorPersian+"\n"+result.errorLatin);
        }
        else{
          setApproles(result.data);
        }
      }

      fetchData();

      }
    ,[]);

    return (
    <div className={classes.root}> 
    <Card className={classes.root} variant="outlined">
      <CardContent>

      <Grid container spacing={1} >

      <Grid item xs={12} md={8}>
          <TextField
            //className={classes.input}
            placeholder={strSearchApproles}
            inputProps={{  'aria-label': {strSearchApproles} }}
            value={search}
            onChange={e=>{
              setSearch(e.target.value);
              }}
            variant='outlined'
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={4}>
        <IconButton type="submit" className={classes.iconButton} aria-label="search"
          onClick={()=>{
            let filteredData = null;
            filteredData = data.approles.filter(item=>
                  item.approleName.includes(search) ||
                  item.approleDesc.includes(search) ||
                  item.approleType.includes(search) ||
                  item.approleLatinName.includes(search)                 
                );
                //console.log(search,filteredData);
            setApproles(filteredData);
          }}
          >
            <SearchIcon />
          </IconButton>
          <IconButton 
            type="submit" 
            className={classes.iconButton} 
            aria-label="add" 
            onClick={()=>{
                setMode('add');
            }}
            >
            <AddIcon />
          </IconButton>
        </Grid>
        
        </Grid>

        <ObieeDialog 
        title="Add new Approle"
        openModal={mode==='add' || mode==='edit'}
        //TransitionComponent
        eventClose={()=>{
          setMode('');
        }}
        >
        <ObieeItemApprole 
          mode={mode} 
          approle={approle}
          onAdd={async approleItem=>{
            console.log('add',approleItem);

            const result = await approleCreate(approleItem);
            console.log(result);
            if(result.errorMessage){
              setShowmessage(result.errorPersian+"\n"+result.errorLatin);
            }
            else{
            }

            setMode('');
          }}
          onEdit={async approleItem=>{
            console.log('edit',approleItem);

            const result = await approleEdit(approleItem);
            if(result.errorMessage){
              setShowmessage(result.errorPersian+"\n"+result.errorLatin);
            }
            else{
            }

            setMode('');
          }}
          onCancel={()=>{
            setMode('');
            setApprole(undefined);          
          }}
        />
        </ObieeDialog>

        {showConfirmDelete &&
        <ObieeConfirmationDialog 
            open={true}
            dialogTitle={"هشدار !"}
            dialogContent={"آیا از حذف اطمینان دارید؟"}
            onExecute={async ()=>{
              //alert('delete record');
              await approleDelete(approle.approleName);
              setShowConfirmDelete(false);
            }}
            onCancel={()=>{setShowConfirmDelete(false)}}
        />
        }

        {approles && approles.length>0 &&          
          approles.map((approle,index)=>(
                <ObieeItemApprole 
                mode="read" 
                key={index} 
                approle={approle} 
                onDelete={approleName=>{
                    console.log('delete:'+approleName);
                    setApprole(prev=>{
                      const result = {prev,approleName:approleName};
                      return result;
                    });
                    setShowConfirmDelete(true);
                }}
                onExternalEvent={approleItem=>{
                  setApprole(approleItem);
                  setMode('edit');
                }}
                />
          ))
        }
      </CardContent>
    </Card>
    <ObieeShowMessage 
      open={showmessage!==''} 
      onClose={()=>{setShowmessage('')}} 
      message={showmessage} 
      type="error"/>
    </div>
    )
}

ObieeCrudApprole.propTypes = {
  url: PropTypes.string.isRequired,
}
