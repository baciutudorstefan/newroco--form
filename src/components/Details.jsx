import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import { TextareaAutosize } from '@mui/base';
import Button from '@mui/material/Button';

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
                style={{width: 300}}
            />
            <br/>
            <h3>Abstract</h3>
            <TextareaAutosize 
                label="Abstract"
                placeholder="Abstract"
                style={{width: 300}}
                minRows={4}
                maxRows={10}
                maxLength="100"
                defaultValue="Lorem ipsum "
                onChange={handleChange('abstract')}
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

export default Details