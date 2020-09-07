import React from "react";
import { withStyles,makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Divider from "@material-ui/core/Divider";
import {getText} from '../utils/Utils';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    padding: "0px"
  }
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));



export default function ObieeAppearance(props) {

  const {anchorEl,handleClose,handleChangeTheme,handleChangeDirection,handleChangeVariant} = props;
  
  const [isDirectionRight, setIsDirectionRight] = React.useState(true);
  const [isThemeLight, setIsThemeLight] = React.useState(true);
  //const [anchorEl, setAnchorEl] = React.useState(null);

  const [variant, setVariant] = React.useState("standard");

  // const handleChangeDirection = (event, newDirectionRight) => {
  //   console.log(isDirectionRight);
  //   setIsDirectionRight(!isDirectionRight);
  // };

  // const handleChangeTheme = (event, newThemeRight) => {
  //   console.log(isThemeLight);
  //   setIsThemeLight(!isThemeLight);
  // };

  // const handleChangeVariant = (event, newAlignment) => {
  //   console.log(newAlignment);
  //   setVariant(newAlignment);
  // };


  const strAppearance = getText('Appearance');
  const strDirectionLeft = getText('Direction Left');
  const strDirectionRight = getText('Direction Right');
  const strThemeLight = getText('Theme Light');
  const strThemeDark = getText('Theme Dark');
  const strFilled = getText('filled');
  const strOutlined = getText('outlined');
  const strStandard = getText('standard');
  const strChangeAppearanceOfLayout = getText('Change Appearance Of Layout');

  return (
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <Card>
      <CardHeader></CardHeader>
      <CardContent>
        <FormControl component="fieldset">
          <FormLabel component="legend">{strAppearance}</FormLabel>
          <br />
          <FormGroup>
            <ToggleButtonGroup
              size="small"
              value={isDirectionRight}
              exclusive
              onChange={handleChangeDirection}
            >
              <ToggleButton value={false}>{strDirectionLeft}</ToggleButton>
              <ToggleButton value={true}>{strDirectionRight}</ToggleButton>
            </ToggleButtonGroup>

            <br />
            <Divider />
            <br />

            <ToggleButtonGroup
              size="small"
              value={isThemeLight}
              exclusive
              onChange={handleChangeTheme}
            >
              <ToggleButton value={true}>{strThemeLight}</ToggleButton>
              <ToggleButton value={false}>{strThemeDark}</ToggleButton>
            </ToggleButtonGroup>

            <br />
            <Divider />
            <br />

            <ToggleButtonGroup
              size="small"
              value={variant}
              exclusive
              onChange={handleChangeVariant}
            >
              <ToggleButton value="filled">{strFilled}</ToggleButton>
              <ToggleButton value="outlined">{strOutlined}</ToggleButton>
              <ToggleButton value="standard">{strStandard}</ToggleButton>
            </ToggleButtonGroup>
          </FormGroup>

          <FormHelperText>{strChangeAppearanceOfLayout}</FormHelperText>
        </FormControl>
      </CardContent>
      </Card>
      </StyledMenu>

  );
}
