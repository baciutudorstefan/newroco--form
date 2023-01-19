import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormDetails extends Component {

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

            <AppBar title="Free Text"/>
            <TextField 
                hintText="Enter Free Text"
                floatingLabelText="Free Text"
                onChange={handleChange('textArea')}
                defaultValue={values.textArea}
            />
            <br/>

            <TextField 
                hintText="Enter L Name"
                floatingLabelText="L Name"
                onChange={handleChange('bio')}
                defaultValue={values.bio}
            />

            <br/>

            <TextField 
                hintText="Enter Your EMAIL"
                floatingLabelText="EMAIL"
                onChange={handleChange('city')}
                defaultValue={values.city}
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

export default FormDetails