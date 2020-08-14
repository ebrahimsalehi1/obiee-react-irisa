import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import {
//     Done,
//     GroupWork,
//     Cancel
// } from '@material-ui/icons';
import IconContactMail from '@material-ui/icons/ContactMail';
import IconRecentActors from '@material-ui/icons/RecentActors';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: 'white',//theme.palette.background.paper,
    },
    button:{
        margin: theme.spacing(2),//.unit,
        textAlign:'start',
        alignItems: 'flex-start',
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2) * 3,
        right: theme.spacing(2) * 3,
    },
    tabsRoot: {
        borderBottom: '1px solid #e8e8e8',
    },
    tabsIndicator: {
        backgroundColor: '#1890ff',
    },
    tabRoot: {
        textTransform: 'initial',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(2) * 4,
    }
    }
    );

const MyTab = withStyles(({
    root:{
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'white',
        },

        textTransform: 'initial',
        minWidth: 72,
        fontWeight: 4,
        marginRight: 4 * 4,
    },
    wrapper:{
        flexDirection: 'row',
        display: 'inline-block',
        width:'200px',
    },
    // labelContainer:{
    //     //width:'70%',
    //     fontSize:'10px',
    //     padding: 0,
    //     margin: 0,
    // }
}))(Tab);

function ObieeTabs(props){
    //const [value,setValue] = React.useState(0);
    const {classes,tabData,value,handleChange} = props;

    return (
            <Tabs
            value={value}
            onChange={handleChange}
            //indicatorColor="primary"
            //textColor="primary"
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
            >
            {
                tabData &&
                tabData.map(tab=>(
                    <MyTab key={tab.title } label={tab.title } icon={tab.icon ? tab.icon:null} />
                ))
            }

            </Tabs>
    )
}

export default  withStyles(styles)(ObieeTabs);