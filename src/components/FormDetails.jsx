import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import FormControl from '@mui/material/FormControl';
import RaisedButton from 'material-ui/RaisedButton'

import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio';


export class FormDetails extends Component {

    continue = e => {
        e.preventDefault ();
        this.props.nextStep();
      }

  render() {
    const {values, handleChange} = this.props;
    

    return (
      <MuiThemeProvider>

        <React.Fragment>

            <AppBar title="Enter Details"/>
            
         

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Record type</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  onChange={handleChange('recordType')}
                >
                  <FormControlLabel value="Article" control={<Radio />} label="Article" />
                  <FormControlLabel value="Client Report" control={<Radio />} label="Client Report" />
                  <FormControlLabel value="Monograf" control={<Radio />} label="Monograf" />
                </RadioGroup>
              </FormControl>



            <br/>
            <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
            />
           
            
        </React.Fragment>  

      </MuiThemeProvider>
    )
  }
}


const styles= {
    button: {
        margin: 15
    }
}

export default FormDetails