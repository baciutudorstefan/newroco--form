import React, { Component } from 'react'
import FormDetails from './FormDetails';
import Details from "./Details"

export class Form extends Component {





  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    textArea: '',
    bio: '',
    city: ''

  }


  //Mergi la pasul urmator
  nextStep = () => {
    const {step} =this.state;
    this.setState({
      step: step + 1
    })
   }
  
   //Mergi la pasul anterior
  prevStep = () => {
    const {step} =this.state;
    this.setState({
      step: step - 1
    })
  }

  //
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  render() {

    const {step} = this.state;
    const {firstName, lastName, email, textArea, bio, city} = this.state;
    const values = {firstName, lastName, email, textArea, bio, city}

    switch(step) {
      case 1 :
        return (
          <FormDetails
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values={values}
          />
        )
        case 2:
          return (
            <Details
              prevStep = {this.prevStep}
              nextStep = {this.nextStep}
              handleChange = {this.handleChange}
              values={values}
              />
            )
        case 3:
          return <h1>Upload</h1>
        case 4:
          return <h1>Success</h1>
    }

    return (
      <div>Form</div>
    )
  }
}

export default Form