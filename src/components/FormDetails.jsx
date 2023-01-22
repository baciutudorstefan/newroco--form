import React, { Component, useSate } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

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

            <AppBar title="Type"/> 
          

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Record type</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  defaultValue="Article"
                  onChange={handleChange('recordType')}
                >
                  <FormControlLabel onChange={handleChange} control={<Radio value="Article" name="radioBtn" />} label="Article" />
                  <FormControlLabel onChange={handleChange} control={<Radio value="Report" name="radioBtn" />} label="Client Report" />
                  <FormControlLabel onChange={handleChange} control={<Radio value="Monograf" name="radioBtn" />} label="Monograf" />
                </RadioGroup>

                
              </FormControl>

             





            <br/>
            <Button
            variant="outlined"
            style={styles.button}
            onClick={this.continue}
            >Continue</Button>
           
            
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