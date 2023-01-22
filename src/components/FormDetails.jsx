import React, { Component, useSate } from 'react'
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

            <AppBar title="Type"/> 
          

            {/* <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Record type</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  // defaultValue="Article"
                  onChange={handleChange('recordType').bind(this)}
                >
                  <FormControlLabel control={<Radio value="article" name="radioBtn" onChange={handleChange}/>} label="Article" />
                  <FormControlLabel control={<Radio value="report" name="radioBtn" onChange={handleChange}/>} label="Client Report" />
                  <FormControlLabel control={<Radio value="monograf" name="radioBtn" onChange={handleChange}/>} label="Monograf" />
                </RadioGroup>

                
              </FormControl> */}

              <form 
              onChange={handleChange('recordType').bind(this)}
              >
                <div className="radio">
                  <label>
                    <input value="article" name="radioBtn"  type="radio" checked={handleChange === 'article'} defaultChecked={true}/>
                    Article
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input value="report" name="radioBtn"  type="radio" checked={handleChange === 'report'} />
                    Client Report
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input value="monograf" name="radioBtn"  type="radio"  checked={handleChange === 'monograf'} />
                    Monograf
                  </label>
                </div>
              </form>





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