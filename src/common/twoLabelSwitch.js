import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const PurpleSwitch = withStyles({
  switchBase: {
    color: purple[300],
    '&$checked': {
      color: purple[500],
    },
    '&$checked + $track': {
      backgroundColor: purple[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

  function TwoLabelSwitch(props) {
    const { labelA, labelB, checked, onChange, name="twoLabelSwitch" } = props;
    return (
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>{labelA}</Grid>
          <Grid item>
          <PurpleSwitch
            checked={checked}
            onChange={onChange}
            value={name}
            name={name}
          />
          </Grid>
          <Grid item>{labelB}</Grid>
        </Grid>
      </Typography>
    );
  }
     
  export default TwoLabelSwitch;