import React, { Component, useState, useEffect } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export class Confirm extends Component {

    
      back = e => {
        e.preventDefault ();
        this.props.prevStep();
      }

  render() {
    const {values:{recordType, uploadFile, title, abstract}} = this.props;
    

    function handleForm() {
        const formData = {recordType, uploadFile, title, abstract}

        // Send data to the backend via POST
        fetch('https://httpbin.org/post', {  
    
          method: 'POST', 
          mode: 'cors', 
          body: JSON.stringify(formData) 
    
        }).then(() => {
            const successRequest = 
            alert('Success, see console!')
            console.log(formData)
        }).catch(err => err)
        
      }


    return (
      <MuiThemeProvider>

        <React.Fragment>

            <AppBar title="Confirm"/>

            <List>
                <ListItem  
                primaryText="Title"
                secondaryText={title}
                />
            </List>

            <List>
                <ListItem  
                primaryText="Abstract"
                secondaryText={abstract}
                />
            </List>
            
            <List>
                <ListItem  
                primaryText="Record Type"
                secondaryText={recordType}
                />
            </List>
            
            <List>
                <ListItem  
                primaryText="Document"
                secondaryText={uploadFile}
                />
            </List>
            
            


            <br/>
            <Button
            variant="outlined"
            style={styles.button}
            onClick={this.back}
            >Previous
            </Button>
            <Button
            variant="outlined"
            style={styles.button}
            onClick={handleForm}
            endIcon={<SendIcon/>}
            >Send</Button>
           
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

export default Confirm