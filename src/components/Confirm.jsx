import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {

    continue = e => {
        e.preventDefault ();
        //Trimite Datele la API//

        this.props.nextStep();
      }
    
      back = e => {
        e.preventDefault ();
        this.props.prevStep();
      }

  render() {
    const {values:{firstName, lastName, email, textArea, bio, city}} = this.props;


    return (
      <MuiThemeProvider>

        <React.Fragment>

            <AppBar title="Confirm"/>

            <List>
                <ListItem  
                primaryText="First Name"
                secondaryText={firstName}
                />
            </List>
            <List>
                <ListItem  
                primaryText="Last Name"
                secondaryText={lastName}
                />
            </List>
            <List>
                <ListItem  
                primaryText="Email"
                secondaryText={email}
                />
            </List>
            <List>
                <ListItem  
                primaryText="Text Area"
                secondaryText={textArea}
                />
            </List>
            <List>
                <ListItem  
                primaryText="Bio"
                secondaryText={bio}
                />
            </List>
            <List>
                <ListItem  
                primaryText="City"
                secondaryText={city}
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

export default Confirm