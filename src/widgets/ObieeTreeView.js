import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import {getText} from '../utils/Utils';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function ObieeTreeView() {
  const classes = useStyles();

  // 'Security','Application roles','User Approles','Objects of Approle'
  const strSecurity = getText('Security');
  const strApplicationRoles = getText('Application roles');
  const strUserApproles = getText('User Approles');
  const strObjectsOfApprole = getText('Objects of Approle');

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label={strSecurity}>
        <TreeItem nodeId="2" label={strApplicationRoles} />
        <TreeItem nodeId="3" label={strUserApproles} />
        <TreeItem nodeId="4" label={strObjectsOfApprole} />
      </TreeItem>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="6" label="Material-UI">
          <TreeItem nodeId="7" label="src">
            <TreeItem nodeId="8" label="index.js" />
            <TreeItem nodeId="9" label="tree-view.js" />
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}
