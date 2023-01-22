import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {

    
      back = e => {
        e.preventDefault ();
        this.props.prevStep();
      }

  render() {
    const {values:{recordType, lastName, email, uploadFile, title, abstract}} = this.props;
    

    function handleForm() {
        const formData = {recordType, lastName, email, uploadFile, title, abstract}

        // Send data to the backend via POST
        fetch('https://httpbin.org/post', {  
    
          method: 'POST', 
          mode: 'cors', 
          body: JSON.stringify(formData) 
    
        }).then(() => {
            console.log('Form sent')
        })
        
      }

    return (
      <MuiThemeProvider>

        <React.Fragment>

            <AppBar title="Confirm"/>
           
            <List>
                <ListItem  
                primaryText="Record Type"
                secondaryText={recordType}
                />
            </List>
            
            <List>
                <ListItem  
                primaryText="uploadFile"
                secondaryText={uploadFile}
                />
            </List>
            <List>
                <ListItem  
                primaryText="title"
                secondaryText={title}
                />
            </List>
            <List>
                <ListItem  
                primaryText="Abstract"
                secondaryText={abstract}
                />
            </List>

            <br/>
            <RaisedButton
            label="Prev"
            primary={true}
            style={styles.button}
            onClick={this.back}
            />
            <RaisedButton
            label="Confirm & Continue"
            primary={false}
            style={styles.button}
            onClick={handleForm}
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

export default Confirm