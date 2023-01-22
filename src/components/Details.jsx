import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { TextareaAutosize } from '@mui/base';

export class Details extends Component {

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

            <AppBar title="Details"/>

            

            <TextField 
                hintText="Title"
                floatingLabelText="Title"
                onChange={handleChange('title')}
                defaultValue={values.title}
                maxLength="10"
            />

            <br/>

            <TextareaAutosize 
                aria-label="Abstract"
                placeholder="Abstract"
                minRows={4}
                maxRows={10}
                maxLength="100"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                onChange={handleChange('abstract')}
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

export default Details