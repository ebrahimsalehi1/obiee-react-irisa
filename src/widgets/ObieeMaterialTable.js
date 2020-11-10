import React from 'react';
import MaterialTable from 'material-table';

//import PropTypes from 'prop-types';
//import Add from '@material-ui/icons/Add';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MoreVert from '@material-ui/icons/MoreVert';
import Refresh from '@material-ui/icons/Refresh';
import {MuiThemeProvider,createMuiTheme, makeStyles} from '@material-ui/core/styles';
import {callRestPost} from '../utils/Utils';
import {UserContext} from '../Context';

const tableIcons = {
    Add: React.forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: React.forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: React.forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: React.forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: React.forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: React.forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: React.forwardRef((props, ref) => <SaveAlt {...props} ref={ref} onClick={e=>alert('SaveAlt Click me')} />),
    Filter: React.forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: React.forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: React.forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: React.forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: React.forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: React.forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: React.forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: React.forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: React.forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: React.forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const useStyles = makeStyles(theme=>({
    root: {
        width: '100%',
        //maxWidth: '36ch',
        //backgroundColor: theme.palette.background.paper,
      },    
}));

const myStyleTheme = createMuiTheme(
{
    overrides:{
        MuiToolbar:{root:{direction:"ltr"}},
        MuiInputBase:{
            input:{textAlign:'right'}
        },
        MuiTableRow:{
                    root:{
                        fontFamily: 'IRANSans-web',
                        fontSize:10,
                        height: 60
                    },
                    head: {
                        height: 40,
                        borderBottom: "1px solid #c7c7c7"
                    }
                },
        MuiTableCell: {
            root: {
                        padding: '0 4px',
                        textAlign: "center"
                    },
            body: {
                        fontSize: '11px'
                    },
            head: {
                        fontSize: '0.7rem',
                        height: 60
                    },
            alignLeft:{textAlign:'center'}
        },
        MuiTablePagination: {
                    caption: {
                        fontSize: '11px'
                    }
                },
        MuiTableSortLabel: {
                    root: {
                        //color: "#009ce6",
                        color: '#263238',
                        alignContent: 'center',
                    }
                },
        // MTableHeader: {
        //     header:{
        //         fontFamily: 'IRANSans-web',
        //         fontSize:20,
        //         height: 60
        //     }
        // }
    }

    });

export default function ObieeMaterialTable(props) {

    const classes = useStyles();
    const tableRef = React.createRef();

    const context = React.useContext(UserContext);

    const { 
        icons,columns,data,actions,editable,title,endpoint,
        url,gridLoad,
        formItemsAdd,formItemsEdit,
        options,parentChildData,detailPanel,
        onTreeExpandChange,...others
    } = props;

    const [state, setState] = React.useState({
        data:data
    });


    const [show,setShow] = React.useState(false);

    async function loadWebService(){
        if(url){
            context.obieeDispatch({type:'show_loading'});
      
            const user = localStorage.getItem('user');
      
            await callRestPost(url,[],{
                "user": user,
                "searchWord":""
            })
            .then(res=>{
              console.log("ObieeTable data",res);
              setState({data:res.data});
      
              context.obieeDispatch({type:'hide_loading'});
            })
            .catch(err=>{
                console.log('ObieeTable err',err);

              context.obieeDispatch({type:'hide_loading'});
              context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:'Error occured'}});
              //context.obieeDispatch({type:'show_message',messageToShow:{type:'error',message:result.error.errorPersian+"\n"+result.error.errorLatin}});
            });
        }      
    }

    React.useEffect(()=>{
        loadWebService();
    },[url]);


    return (
        <MuiThemeProvider theme={myStyleTheme}>
        <div className={classes.root}>
            <MaterialTable
                icons={icons ? icons : tableIcons}
                tableRef={tableRef}
                title={""}
                columns={columns}
                data={url && Array.isArray(state.data) ? state.data : data}
                editable={editable}
                actions={[
                    {isFreeAction:true,icon:()=>(<MoreVert />),tooltip:'منوهای بیشتر',onClick:(event,rowData)=>{}},
                    {isFreeAction:true,icon:()=>(<Refresh />),tooltip:'بروزرسانی',onClick:(event,rowData)=>{}},
                    ...actions,
                ]}
                localization={{
                    pagination: {
                        labelDisplayedRows: '{from}-{to} ', // از {count}
                        labelRowsPerPage:'سطرها در صفحه:',
                        labelRowsSelect: "سطرها",
                    },
                    toolbar: {
                        nRowsSelected: '{0} سطر(ها) انتخاب شده',
                        searchPlaceholder:'جستجو'
                    },
                    header: {
                        actions: 'عملیات'
                    },
                    body: {
                        emptyDataSourceMessage: 'رکوردی برای نمایش وجود ندارد',
                        filterRow: {
                            filterTooltip: 'فیلتر'
                        }
                    }
                }}
                options={{
                    ...options,
                    headerStyle: {
                        //backgroundColor: '#01579b',
                        //color: '#FFF',
                        fontFamily: 'IRANSans-web',
                        fontSize:12
                    },
                    toolbarButtonAlignment:'left',
                    toolbarAlignment:'left',
                    //selection: true
                    //searchFieldAlignment:'left'
                }}
                parentChildData={parentChildData}
                onTreeExpandChange={onTreeExpandChange}
                detailPanel={detailPanel}
                {...others}
            />
        </div>
        </MuiThemeProvider>
    );
}
