import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import App from '../App'

export class Success extends Component {

  
  render() {


    return (
      <MuiThemeProvider>

        <React.Fragment>

            <AppBar title="Success"/>

           <h1>Thank you for your submission</h1>
           <p>You will receive an email with further instructions</p>
           
            <App/>
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

export default Success