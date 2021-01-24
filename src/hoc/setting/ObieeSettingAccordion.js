import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import SettingsIcon from '@material-ui/icons/Settings'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types';

const accordingStyles = makeStyles(() => ({
  root: {
    width: '100%',
    minWidth:700,
    borderRadius: 3
  }
}));

const accordionSummaryStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#3f51b5',
    color: '#FFFFFF',
    borderRadius: 3
  },
  icon:{
    marginLeft: '2%',
    color:'#FFFFFF',
  }
}));

const accordionDetailsStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding:0
  },
  controlLabel:{
      padding: '2%',
      color:'#000000',
      textAlign:'left'
  },
  footer:{
    padding: '3%',
    display: 'flex',
    flexFlow: 'row-reverse'
  },
  button:{
    margin: '1%'
  },
  item:{
    display:'flex'
  }
}));

export default function ObieeSettingAccordion(props){
  
  const {title,onCheckChange,onSaveClick,onCancelClick} = props;
  const [items, setItems] = React.useState(props.items);

  const according = accordingStyles()
  const accordionDetails = accordionDetailsStyles()
  const accordionSummary = accordionSummaryStyles()

  const checkChangeHandler = (title,value) => {

    setItems(prev=>{
        const dataItems = prev;
        const foundItem = dataItems.filter(item=>item.title===title);

        if(foundItem.length > 0){
          const foundIndex = dataItems.indexOf(foundItem[0]);

          foundItem[0].value = value;
          dataItems.splice(foundIndex,1,foundItem[0]);
        }

        return dataItems;
    });

    onCheckChange(items);
  }

  return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center">
        <Grid item xs={12}>
          <Accordion className={according.root}>
            <AccordionSummary
              className={accordionSummary.root}
              expandIcon={<ExpandMoreIcon className={accordionSummary.icon}/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <SettingsIcon className={accordionSummary.icon} />
              <Typography>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails className={accordionDetails.root}>
                {
                  items &&
                  items.map((item, key) => {
                    return (
                      <div key={key} className={accordionDetails.item}>
                        <FormControlLabel
                          className={accordionDetails.controlLabel}
                          key={key}
                          aria-label="Acknowledge"
                          control={
                            <Checkbox color="default"
                              value={item.title}
                              defaultChecked={item.value}                              
                              onChange={(e)=>{checkChangeHandler(item.title,e.target.checked)}}
                            />}
                          label={item.title}
                        />
                      </div>
                    )
                  })
                }
              <Divider />
              <div className={accordionDetails.footer}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={accordionDetails.button}
                  onClick={onCancelClick}
                  >انصراف</Button>
                <Button
                  variant="contained"
                  className={accordionDetails.button}
                  onClick={onSaveClick}
                  >ذخیره</Button>
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
  )
}

ObieeSettingAccordion.prototype = {
  title: PropTypes.string.isRequired,
  onCheckChange: PropTypes.func.isRequired,
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired
}
