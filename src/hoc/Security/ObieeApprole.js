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
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
const ObieeItemApprole = React.lazy(()=>import("./ObieeItemApprole"));
import ObieeDialog from '../../widgets/ObieeDialog';
//import ObieeConfirmationDialog from '../../widgets/ObieeConfirmationDialog';
import {getText,addToList,deleteFromList,updateList} from '../../utils/Utils';
import {appRoleAll,approleCreate,approleEdit,approleDelete} from '../../webservice/Approle';
//import ObieeShowMessage from '../widgets/ObieeShowMessage';
import {UserContext} from '../../Context';
import ObieeMaterialTable from '../../widgets/ObieeMaterialTable';
import Refresh from '@material-ui/icons/Refresh';

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

export default function ObieeApprole(props){

    const classes = useStyles();

    const [approles,setApproles] = React.useState([]); 
    const [filteredApproles,setFilteredApproles] = React.useState([]); 

    const [mode,setMode] = React.useState('');
    const [showConfirmDelete,setShowConfirmDelete] = React.useState(false);
    const [searchWord,setSearchWord] = React.useState('');
    const [approle,setApprole] = React.useState(undefined);

    const strSearchApproles = getText('Search approles');

    const context = React.useContext(UserContext);

    async function fetchData(){

      context.obieeDispatch({type:'show_loading'});
      const result = await appRoleAll();

      if(result.error){
        context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
      }
      else{
        setApproles(result.data);
        setFilteredApproles(result.data);
      }

      context.obieeDispatch({type:'hide_loading'});

    }

    React.useEffect(()=>{

      fetchData();

      }
    ,[]);

    return (
      <div className={classes.root}>
      <ObieeMaterialTable
          title=""
          columns={[
            { field: 'name', title: getText('Name'), headerStyle:{width:200} },
            { field: 'displayName', title: getText('DisplayName'), headerStyle:{width:300} },
            { field: 'description',title:getText('Description')},
          ]} 
          data={approles}
          actions={[
            {isFreeAction:true,icon:()=>(<Refresh />),tooltip:'بروزرسانی',onClick:(event,rowData)=>{fetchData()}},
            {
              isFreeAction:true,
              icon:AddIcon,   
              tooltip:'Add a row on tree',
              onClick: (event, rowData) => {
                  setMode('add');
              }   
            },
            {
              icon:EditIcon,   
              tooltip:'Edit a row on tree',
              onClick: (event, rowData) => {
                  setMode('edit');
                  setApprole(rowData);          
              }
            }          
          ]}
          editable={            
              {
                onRowDelete: oldRow => new Promise(async (resolve,reject)=>{

                  context.obieeDispatch({type:'show_loading'});
                  const result = await approleDelete(oldRow.name);
          
                  if(result.error){
                    context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+". "+result.error.errorLatin}});
                    resolve();
                  }
                  else{
                    const newList = deleteFromList(approles,oldRow);
                    if(newList.length > 0){
                      setApproles(newList);
                    }
                    context.obieeDispatch({type:'show_message',messageToShow:{type:'info',message:getText('Operation Successful')}});                    
                    resolve();
                  }
          
                  context.obieeDispatch({type:'hide_loading'});

                }),
                // onRowUpdate: (oldRow,newRow)=>new Promise((resolve,reject)=>{

                //   setMode('edit');
                //   setApprole(oldRow);
                //   resolve();
                // }),
          
              }            
          }
      />
      {(mode==='add' || mode==='edit') &&
      <ObieeDialog 
      title={mode==='add' ? getText("Add new Approle") : mode==='edit' ? getText("Edit Approle"):""}
      openModal={true}
      //TransitionComponent
      eventClose={()=>{
        setMode('');
      }}
      >
      <ObieeItemApprole 
        mode={mode} 
        approle={approle}
        onAdd={async approleItem=>{

          context.obieeDispatch({type:'show_loading'});

          const result = await approleCreate(approleItem);
          if(result.error){
            //setShowmessage(result.errorPersian+"\n"+result.errorLatin);
            context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+"\n"+result.error.errorLatin}});
          }
          else{
            const newList = addToList(approles,approleItem);
            setApproles(newList);
            context.obieeDispatch({type:'show_message',messageToShow:{type:'info',message:getText('Operation Successful')}});                    
          }

          setMode('');

          context.obieeDispatch({type:'hide_loading'});
        }}
        onEdit={async approleItem=>{
          context.obieeDispatch({type:'show_loading'});

          const result = await approleEdit(approleItem);
          if(result.error){
            //setShowmessage(result.errorPersian+"\n"+result.errorLatin);
            context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+"\n"+result.error.errorLatin}});
          }
          else{
            const newList = updateList(approles,approle,approleItem);
            setApproles(newList);
            context.obieeDispatch({type:'show_message',messageToShow:{type:'info',message:getText('Operation Successful')}});                    
          }

          setMode('');
          context.obieeDispatch({type:'hide_loading'});

        }}
        onCancel={()=>{
          setMode('');
          setApprole(undefined);          
        }}
      />
      </ObieeDialog>
      }

      </div>
    )

    /*
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
            value={searchWord}
            onChange={e=>{
              setSearchWord(e.target.value);

              const search =e.target.value;
              let filteredData = null;
              filteredData = approles.filter(item=>
                    (item.name && item.name.toUpperCase().includes(search.toUpperCase())) ||
                    (item.displayName && item.displayName.toUpperCase().includes(search.toUpperCase())) ||
                    (item.desciption && item.desciption.toUpperCase().includes(search.toUpperCase()))
                  );
              setFilteredApproles(filteredData);   
                            
            }}
            variant='outlined'
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={4}>
        <IconButton type="submit" className={classes.iconButton} aria-label="search"
          onClick={()=>{
            let filteredData = null;
            filteredData = approles.filter(item=>
                  (item.name && item.name.toUpperCase().includes(searchWord.toUpperCase())) //||
                  //(item.displayName && item.displayName.toUpperCase().includes(searchWord.toUpperCase())) ||
                  //(item.desciption && item.desciption.toUpperCase().includes(searchWord.toUpperCase()))
                );
            setFilteredApproles(filteredData);            

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

            context.obieeDispatch({type:'show_loading'});

            const result = await approleCreate(approleItem);
            if(result.error){
              //setShowmessage(result.errorPersian+"\n"+result.errorLatin);
              context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+"\n"+result.error.errorLatin}});
            }
            else{
            }

            setMode('');

            context.obieeDispatch({type:'hide_loading'});
          }}
          onEdit={async approleItem=>{

            context.obieeDispatch({type:'show_loading'});

            const result = await approleEdit(approleItem);
            if(result.error){
              //setShowmessage(result.errorPersian+"\n"+result.errorLatin);
              context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+"\n"+result.error.errorLatin}});
            }
            else{
            }

            setMode('');
            context.obieeDispatch({type:'hide_loading'});

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

        {filteredApproles.length>0 &&         
          filteredApproles.map((approle,index)=>(
                <ObieeItemApprole 
                mode="read" 
                key={index} 
                approle={approle} 
                onDelete={approleName=>{
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

    </div>
    )
    */
    
}

ObieeApprole.propTypes = {
  url: PropTypes.string.isRequired,
}
