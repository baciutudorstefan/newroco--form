import React, { Component } from 'react'
import FormDetails from './FormDetails';
import Details from "./Details"
import Confirm from "./Confirm"
import Success from './Success';
import UploadComp from './UploadComp';

export class Form extends Component {


  state = {
    step: 1,
    recordType: '',
    uploadFile: '',
    title: '',
    abstract: ''

  }


  //next step
  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    })
   }
  
   //previous step
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
    const {recordType, uploadFile, title, abstract} = this.state;
    const values = {recordType, uploadFile, title, abstract}

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
            <UploadComp
            prevStep = {this.prevStep}
            nextStep = {this.nextStep}
            handleChange = {this.handleChange}
            values={values}
            />
            )
      case 4:
          return (
            <Confirm
            prevStep = {this.prevStep}
            values={values}
            />
            )
      // case 5:
      //     return (
      //       <Success/>
      //       )
    }

    return (
      <div>Form</div>
    )
  }
}

export default Form