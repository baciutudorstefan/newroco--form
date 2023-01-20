import React, { Component } from 'react'
import FormDetails from './FormDetails';
import Details from "./Details"
import Confirm from "./Confirm"
import Success from './Success';

export class Form extends Component {


  state = {
    step: 1,
    recordType: '',
    lastName: '',
    email: '',
    uploadFile: '',
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
    const {recordType, lastName, email, uploadFile, bio, city} = this.state;
    const values = {recordType, lastName, email, uploadFile, bio, city}

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
          return (
            <Confirm
            prevStep = {this.prevStep}
            nextStep = {this.nextStep}
            values={values}
            />
            )
        case 4:
          return (
            <Success/>
            )
    }

    return (
      <div>Form</div>
    )
  }
}

export default Form