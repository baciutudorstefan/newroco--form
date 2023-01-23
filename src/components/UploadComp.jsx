import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Button from '@mui/material/Button';
import UploadFile from './UploadFile';

export class UploadComp extends Component {

    continue = e => {
        e.preventDefault ();
        this.props.nextStep();
      }
    
      back = e => {
        e.preventDefault ();
        this.props.prevStep();
      }

  render() {
    const {values, handleChange} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Upload"/>
            <UploadFile 
              onChange={handleChange('uploadFile')}
              defaultValue={values.uploadFile}
            />
            <br/>
            <Button
            variant="outlined"
            style={styles.button}
            onClick={this.back}
            >Previous
            </Button>
             <Button
            variant="contained"
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

export default UploadComp