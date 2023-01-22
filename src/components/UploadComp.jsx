import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
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

            />
            
            <br/>
            <RaisedButton
            label="Prev"
            primary={true}
            style={styles.button}
            onClick={this.back}
            />
            <RaisedButton
            label="Continue"
            primary={false}
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

export default UploadComp